package exam.portal.services;

import java.util.List;
import java.util.Optional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import exam.portal.dtos.LoginDTO;
import exam.portal.dtos.RegisterDTO;
import exam.portal.dtos.UserResponse;
import exam.portal.exceptions.AdminAlreadyCreatedException;
import exam.portal.models.User;
import exam.portal.repos.UsersRepository;

@Service
public class UserService implements IUserService {
	
	@Autowired private UsersRepository repo;
	@Autowired private ModelMapper mapper;
	
	public void saveuser(RegisterDTO dto) throws Exception {
		User user=new User();
		mapper.map(dto, user);
		if(user.getRole().equals("Admin")) {
			if(repo.findByIsadmin().isPresent()) {
				throw new AdminAlreadyCreatedException();
			}
		}
		if(findByUserId(user.getUserid()).isPresent()) {
			throw new Exception("Userid already registered");
		}
		
		repo.save(user);
	}
	
	public Optional<User> validate(LoginDTO dto){
		Optional<User> user = findByUserId(dto.getUserid());
		if(user.isPresent() && user.get().getPwd().equals(dto.getPwd()))
			return user;
		return null;
	}
	
	public Optional<User> findByUserId(String userid) {
		return repo.findByUserid(userid);
	}

	
	public final UserResponse getUserDetails(String userid) {
        return findByUserId(userid).stream().map(u -> mapper.map(u, UserResponse.class)).findFirst().orElse(null);
    }
	
	public List<UserResponse> listall(){
		return repo.findAll().stream().map(u -> mapper.map(u, UserResponse.class)).toList();
	}
	
	public List<UserResponse> searchUsers(String search){
		return repo.findByUnameOrUseridContaining(search).stream().map(u -> mapper.map(u, UserResponse.class)).toList();
	}
}
