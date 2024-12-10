package exam.portal.repos;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import exam.portal.models.Exam;

@Repository
public interface ExamRepository extends JpaRepository<Exam, Integer> {
	@Query(value = "select * from exam where user_id=?1",nativeQuery = true)
	List<Exam> findByUserUserid(int userid);

	@Query(value = "select * from exam where created_by_id=?1",nativeQuery = true)
	List<Exam> findByTeacherUserid(int userid);

	@Query(value="select * from exam where user_id=?1 and cat_id=?2 and status='Not Started'",nativeQuery = true)
	Exam findExamAlreadyScheduled(int userid,int catid);
}
