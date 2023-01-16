package com.zerock.sample;

/* root-context.xml파일의 bean속성 이해를 돕기위한 임시클래스 */

public class Car {
	private String model;
	
	public Car(String model) {
		super();
		this.model = model;
	}

	public String getModel() {
		return model;
	}

	public void setModel(String model) {
		this.model = model;
	}
}
