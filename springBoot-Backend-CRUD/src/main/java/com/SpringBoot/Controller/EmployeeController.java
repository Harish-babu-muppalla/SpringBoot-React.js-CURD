package com.SpringBoot.Controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.SpringBoot.Exception.ResourseNotFoundException;
import com.SpringBoot.Model.Employee;
import com.SpringBoot.Repository.EmployeeRepository;

@CrossOrigin(origins ="http://localhost:3000")
@RestController
@RequestMapping("/api/v1")
public class EmployeeController {
	
	@Autowired
	private EmployeeRepository employeeRepo;
	
	// get all employees
	@RequestMapping("/employees")
	public List<Employee> getEmployees(){
		return employeeRepo.findAll();
	}
	
	// add employee
	@PostMapping(path = "/employees")
	public Employee addEmployee(@RequestBody Employee emp) {
		return employeeRepo.save(emp);
	}
	
	//by id 
	@GetMapping("/employees/{id}")
	public ResponseEntity<Employee> getEmployeeById(@PathVariable int id) {
		
		Employee employee = employeeRepo.findById(id).orElseThrow(() -> new ResourseNotFoundException("Employee not found with id : "+ id));
		return ResponseEntity.ok(employee);
		
	}
	
	// update
	@PutMapping("/employees/{id}")
	public ResponseEntity<Employee> updateEmployee(@PathVariable int id,@RequestBody Employee employee){
		Employee emp = employeeRepo.findById(id).orElseThrow(() -> new ResourseNotFoundException("Employee not found with id : "+ id));
		emp.setFirstName(employee.getFirstName());
		emp.setLastName(employee.getLastName());
		emp.setEmail(employee.getEmail());
		
		Employee updatedemp= employeeRepo.save(emp);
		return ResponseEntity.ok(updatedemp);
		
	}
	@DeleteMapping("/employees/{id}")
	public ResponseEntity<Map<String, Boolean>> deleteEmployee(@PathVariable int id) {
		Employee emp = employeeRepo.findById(id).orElseThrow(() -> new ResourseNotFoundException("Employee not found with id : "+ id));
		employeeRepo.delete(emp);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);	
	}
	

}
