package com.zerock.sample;

import org.springframework.lang.Nullable;
import org.springframework.stereotype.Component;

import lombok.Getter;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;
import lombok.ToString;

@Component
@ToString
@Getter
@RequiredArgsConstructor

public class SampleHotel {
		
		// 생성자의 의해서 값을 자동으로 받아온다
		@NonNull
		private Chef chef;
		
		private String name;

}
