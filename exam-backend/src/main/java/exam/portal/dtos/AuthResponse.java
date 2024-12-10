package exam.portal.dtos;

public class AuthResponse {

	private String accessToken;
	
	public AuthResponse( String accessToken) {
		this.accessToken = accessToken;
	}
	public AuthResponse() {
		// TODO Auto-generated constructor stub
	}
	
	public String getAccessToken() {
		return accessToken;
	}
	public void setAccessToken(String accessToken) {
		this.accessToken = accessToken;
	}

}
