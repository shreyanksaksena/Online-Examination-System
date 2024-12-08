package exam.portal.models;

import java.time.LocalDate;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

@Entity
public class Exam {
 	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    @ManyToOne
    @JoinColumn(name = "cat_id")
    private Category category;
    private int testScore;
    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;
    private LocalDate testDate;
    private String status;
    private int totalmarks;
    private String result;
//    
//    @OneToMany(mappedBy = "exam")
//    private List<ExamQuiz> questions;
//    
//    public List<ExamQuiz> getQuestions() {
//		return questions;
//	}
//	public void setQuestions(List<ExamQuiz> questions) {
//		this.questions = questions;
//	}
	public String getResult() {
		return result;
	}
	public void setResult(String result) {
		this.result = result;
	}
	public int getTotalmarks() {
		return totalmarks;
	}
	public void setTotalmarks(int totalmarks) {
		this.totalmarks = totalmarks;
	}
	public Exam(){
        this.testDate=LocalDate.now();
        this.status="Not Started";
    }
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public Category getCategory() {
		return category;
	}
	public void setCategory(Category category) {
		this.category = category;
	}
	public int getTestScore() {
		return testScore;
	}
	public void setTestScore(int testScore) {
		this.testScore = testScore;
	}
	public User getUser() {
		return user;
	}
	public void setUser(User user) {
		this.user = user;
	}
	public LocalDate getTestDate() {
		return testDate;
	}
	public void setTestDate(LocalDate testDate) {
		this.testDate = testDate;
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
    
    
}
