package com.douzone.emaillist.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.douzone.emaillist.dto.JsonResult;
import com.douzone.emaillist.repository.EmailRepository;
import com.douzone.emaillist.vo.EmailistlVo;

@RestController
@RequestMapping("/api")
public class ApiController {

	@Autowired
	private EmailRepository emailRepository;

	@GetMapping("/emaillist")
	public ResponseEntity<JsonResult> readEmail(@RequestParam(value = "kw", required = true, defaultValue = "") String keyword) {
		return ResponseEntity
				.status(HttpStatus.OK)
				.body(JsonResult.success(emailRepository.findByKeyword(keyword)));
	}
	
	@PostMapping("/emaillist")
	public ResponseEntity<JsonResult> addEmail(@RequestBody EmailistlVo emailVo) {
		emailVo.setNo(emailRepository.insert(emailVo));

		return ResponseEntity.status(HttpStatus.OK).body(JsonResult.success(emailVo));
	}

	@DeleteMapping("/emaillist/{no}")
	public ResponseEntity<JsonResult> removeEmail(@PathVariable Long no) {
		System.out.println("****************" + no);
		emailRepository.delete(no);

		return ResponseEntity.status(HttpStatus.OK).body(JsonResult.success(emailRepository.findByKeyword("")));
	}
//
//	@SuppressWarnings("serial")
//	@PutMapping("/task/{no}")
//	public ResponseEntity<JsonResult> updateTask(@PathVariable("no") Long no, String done) {
//		taskRepository.updateDone(no, done);
//		
//		return ResponseEntity
//				.status(HttpStatus.OK)
//				.body(JsonResult.success(new HashMap<String, Object>() {{
//				    put("no", no);
//				    put("done", done);
//				}}));
//	}

}
