package com.zerock.sample;

import org.springframework.beans.factory.annotation.*;
import org.springframework.stereotype.Component;

import lombok.Data;
import lombok.Setter;

@Component
@Data

public class Restaurant {

	// 의존주입
	@Setter(onMethod_ = @Autowired)
	private Chef chef;
	
	public void setChef(Chef chef) {
		this.chef = chef;
	}
}
