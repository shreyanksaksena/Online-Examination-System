package exam.portal.exceptions;

public class InvalidUserException extends Exception {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	public InvalidUserException() {
		super("Invalid username or password");
	}
}
