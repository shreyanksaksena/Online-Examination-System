package exam.portal.services;

import java.util.List;
import java.util.Optional;

import exam.portal.dtos.LoginDTO;
import exam.portal.dtos.RegisterDTO;
import exam.portal.dtos.UserResponse;
import exam.portal.models.User;

public interface IUserService {
	void saveuser(RegisterDTO user) throws Exception;
	Optional<User> findByUserId(String userid);
	List<UserResponse> listall();
	List<UserResponse> searchUsers(String search);
	Optional<User> validate(LoginDTO dto);
	UserResponse getUserDetails(String userid);
}
