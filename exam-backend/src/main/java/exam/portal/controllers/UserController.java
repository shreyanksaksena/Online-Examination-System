package exam.portal.controllers;

import java.util.Optional;

import javax.annotation.security.RolesAllowed;
import javax.validation.Valid;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import exam.portal.dtos.LoginDTO;
import exam.portal.dtos.RegisterDTO;
import exam.portal.dtos.SuccessResponse;
import exam.portal.exceptions.InvalidUserException;
import exam.portal.models.User;
import exam.portal.services.UserService;

@CrossOrigin
@RestController
@RequestMapping("/api/users")
public class UserController {
	
	private static Logger log = LoggerFactory.getLogger(UserController.class);

	@Autowired private UserService uservice;

	@PostMapping("/validate")
	public ResponseEntity<?> validateUser(@Valid @RequestBody LoginDTO dto) throws InvalidUserException {
		log.info("==== validating user ====");
		try {
            Optional<User> user = uservice.validate(dto);
            if(user.isPresent())
            {
            	return ResponseEntity.ok().body(user);
            }
            else {
            	throw new InvalidUserException();
            }
		}catch(Exception ex) {
			throw new InvalidUserException();
		}
	}
	
	@PostMapping("/register")
	public ResponseEntity<?> registerUser(@Valid @RequestBody RegisterDTO user) throws Exception {
		uservice.saveuser(user);
		return ResponseEntity.ok().body(new SuccessResponse("Registered successfully"));
	}
	
	@GetMapping("/verify")
	public ResponseEntity<?> verifyEmail(String email){
		log.info("Received "+email);
		Optional<User> user= uservice.findByUserId(email);
		return ResponseEntity.ok(user.isEmpty());
	}
	
	@PostMapping("/profile")	
	public ResponseEntity<?> updateProfile(@RequestBody RegisterDTO user) throws Exception {
		uservice.saveuser(user);
		return ResponseEntity.ok(new SuccessResponse("Profile updated"));
	}
	
	@GetMapping("/profile")
	public ResponseEntity<?> getProfile(String userid){
		return ResponseEntity.ok(uservice.getUserDetails(userid));
	}
	
	@GetMapping
	public ResponseEntity<?> getAllusers(Optional<String> search){
		log.info("=== Get user list ====");
		if(search.isEmpty()) {
			return ResponseEntity.ok(uservice.listall());
		}else {
			return ResponseEntity.ok(uservice.searchUsers(search.get()));
		}
	}
}
