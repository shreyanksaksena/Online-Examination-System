package exam.portal;

import org.modelmapper.ModelMapper;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import io.swagger.v3.oas.annotations.OpenAPIDefinition;
import io.swagger.v3.oas.annotations.enums.SecuritySchemeType;
import io.swagger.v3.oas.annotations.info.Info;
import io.swagger.v3.oas.annotations.security.SecurityScheme;

@SpringBootApplication
@OpenAPIDefinition(info = @Info(title = "Exam Portal API",description = "Exam Portal API List ",version = "1.0"))
public class ExamPortalBackendApplication {

	public static void main(String[] args) {
		SpringApplication.run(ExamPortalBackendApplication.class, args);
	}
	
	@Bean
	public ModelMapper ModelMapperConfig(){
		return new ModelMapper();
	}

}
	