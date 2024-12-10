package exam.portal.exceptions;

public class QuestionInUseException extends Exception {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	public QuestionInUseException() {
		super("Question is in used in some exam");
	}
}
