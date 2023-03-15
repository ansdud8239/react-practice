package com.douzone.emaillist.repository;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.douzone.emaillist.vo.EmailistlVo;

@Repository
public class EmailRepository {
	
	@Autowired
	private SqlSession sqlSession;

	public List<EmailistlVo> findByKeyword(String keyword) {
		return sqlSession.selectList("email.findEmail",keyword);
	}

	public Long insert(EmailistlVo emailVo) {
		return (long) sqlSession.insert("email.insert", emailVo);
	}

	public Boolean delete(Long no) {
		return sqlSession.delete("email.delete", no) == 1;
	}


}
