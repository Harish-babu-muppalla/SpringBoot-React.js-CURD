package com.SpringBoot.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.SpringBoot.Model.Employee;

public interface EmployeeRepository extends JpaRepository<Employee,Integer> {

}
