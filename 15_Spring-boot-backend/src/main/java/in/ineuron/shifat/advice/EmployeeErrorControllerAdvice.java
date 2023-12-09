package in.ineuron.shifat.advice;

import java.time.LocalDateTime;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import in.ineuron.shifat.error.ErrorDetails;
import in.ineuron.shifat.exception.EmployeeNotFoundException;

@RestControllerAdvice
public class EmployeeErrorControllerAdvice {

	@ExceptionHandler(EmployeeNotFoundException.class)
	public ResponseEntity<ErrorDetails> handleTouristNotFound(EmployeeNotFoundException e) {
		System.out.println("TouristErrorControllerAdvice.handleTouristNotFound()");

		ErrorDetails errorDetails = new ErrorDetails(LocalDateTime.now(), e.getMessage(), "404-Not Found");
		ResponseEntity<ErrorDetails> responseEntity = new ResponseEntity<>(errorDetails, HttpStatus.NOT_FOUND);
		return responseEntity;
	}

	@ExceptionHandler(Exception.class)
	public ResponseEntity<ErrorDetails> handleAllProblems(Exception exception) {
		System.out.println("TouristErrorControllerAdvice.handleAllProblems()");
		
		ErrorDetails errorDetails = new ErrorDetails(LocalDateTime.now(), exception.getMessage(),
				"problem in execution");
		ResponseEntity<ErrorDetails> responseEntity = new ResponseEntity<>(errorDetails,
				HttpStatus.INTERNAL_SERVER_ERROR);
		
		return responseEntity;
	}
}
