package exam.portal.services;

import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import exam.portal.dtos.QuestionDTO;
import exam.portal.exceptions.QuestionInUseException;
import exam.portal.models.Question;
import exam.portal.repos.QuestionRepository;

@Service
public class QuestionService implements IQuestionService {

	@Autowired private QuestionRepository repo;
	@Autowired private ModelMapper mapper;
	@Autowired private CategoryService catservice;
	
	public void save(QuestionDTO dto) {
		Question quest=new Question();
		mapper.map(dto, quest);
		quest.setCategory(catservice.findById(dto.getCatid()));
		repo.save(quest);
	}
	
	public List<Question> findByCagegory(int id){
		return repo.findByCategoryId(id);
	}
	
	public Question findById(int id) {
		return repo.findById(id).orElseThrow(() -> new IllegalArgumentException("Id does not exists"));
	}
	
	public void deleteQuestionById(int id) throws QuestionInUseException {
		try {
			repo.deleteById(id);
		}catch(Exception ex) {
			throw new QuestionInUseException();
		}
	}
}
