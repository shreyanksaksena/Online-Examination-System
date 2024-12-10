package exam.portal.repos;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import exam.portal.models.Category;

@Repository
public interface CategoryRepository extends JpaRepository<Category, Integer> {
	List<Category> findAllByIsactiveTrue();
}
