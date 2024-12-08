package exam.portal.exceptions;

public class AdminAlreadyCreatedException extends Exception {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	public AdminAlreadyCreatedException() {
		super("Admin user already exists");
	}
}
