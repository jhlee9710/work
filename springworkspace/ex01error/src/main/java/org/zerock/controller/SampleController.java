package org.zerock.controller;

import java.util.ArrayList;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.zerock.domain.SampleDTO;
import org.zerock.domain.SampleDTOList;
import org.zerock.domain.TodoDTO;

import lombok.extern.log4j.Log4j;

@Controller
@RequestMapping("/sample/*")
@Log4j
public class SampleController {
	@RequestMapping("")
	public void basic() {

		log.info("basic...................");

	}
	
	@GetMapping("ex01")
	public String ex01(SampleDTO dto) {  //커맨드객체
		
		log.info("" + dto);
		
		return "ex01";
	}
	
	@GetMapping("ex02")
	public String ex02(@RequestParam("name") String name, @RequestParam("age") int age) {
		
		log.info(name);
		log.info(age);
		
		return "ex02";
		
	}
	
	@GetMapping("ex02List")
	public String ex02List(@RequestParam("ids") ArrayList<String> ids) {
		
		log.info("ids : " + ids);
		
		return "ex02";
		
	}
	
	@GetMapping("ex02Bean")
	public String ex02Bean(SampleDTOList list) {
		
		log.info("list : " + list);
		
		return "ex02Bean";
		
	}
	
	@GetMapping("ex03")
	public String ex03(TodoDTO todo) {
		
		log.info("list : " + todo);
		
		return "ex02";
		
	}
}









