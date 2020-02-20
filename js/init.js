jQuery(document).ready(function($) {
	$('.data-table-dw').dataTable({
		responsive: true,
        "initComplete": function () {
        	let paginateContainer = document.querySelectorAll('.dataTables_paginate');
        		if (paginateContainer) {
        			for (var i = paginateContainer.length - 1; i >= 0; i--) {
        				let prevButton = paginateContainer[i].querySelector('.previous');
        					prevButton.innerHTML = "<i class='dw dw-arrow-ios-left'></i> <span>Пред</span>";
        				let nextButton = paginateContainer[i].querySelector('.next');
        					nextButton.innerHTML = "<span>След</span> <i class='dw dw-arrow-ios-right'></i>";
        			}
        		}
        }
    });
	$('#my-search-table-input').keyup(function(){
	      $('.data-table-dw').dataTable().fnFilter($(this).val());
	});
    $(".message-inner-container").mCustomScrollbar({
    	theme: "dark"
    });
	let sliderContainer = document.querySelector('.intro-slider-trigger');
		if (sliderContainer) {
			let allSlides = sliderContainer.querySelectorAll('.one-item');
			$('#intro-all-slides').text(allSlides.length);
			$('#intro-current-slide').text('1');

			$('.intro-slider-trigger').slick({
				infinite: false,
				slidesToShow: 1,
				appendArrows: '#intro-slider-navigation',
				prevArrow: '<button class="arrow slick-prev"><i class="dw dw-arrow-ios-left"></i></button>',
				nextArrow: '<button class="arrow slick-prev"><i class="dw dw-arrow-ios-right"></i></button>',
				slidesToScroll: 1
			}).on('afterChange', function(event, slick, currentSlide, nextSlide){
				$("#intro-current-slide").text(currentSlide + 1);
				let sliderContainer = document.querySelector('.intro-slider-trigger');
				let allSlides = sliderContainer.querySelectorAll('.one-item');
				$('#intro-all-slides').text(allSlides.length);
			});
		}
})
let allInput = document.querySelectorAll('input.form-control');
	for (var i = allInput.length - 1; i >= 0; i--) {
		let placeholder = allInput[i].placeholder;
		allInput[i].addEventListener('focusin', function(e){
			e.target.placeholder = '';
		})
		allInput[i].addEventListener('focusout', function(e){
			e.target.placeholder = placeholder;
		});
	}
let navTabContainer = document.querySelectorAll('.tabs-navbar-js, .messages-navbar');
	if (navTabContainer) {
		for (var i = navTabContainer.length - 1; i >= 0; i--) {
			let allLink = navTabContainer[i].querySelectorAll('a');
				for (var i = allLink.length - 1; i >= 0; i--) {
					allLink[i].addEventListener('click', function(e){
						e.preventDefault();
						let getTabId = e.target.attributes.href.nodeValue.replace('#','');
						for (var i = allLink.length - 1; i >= 0; i--) {
							allLink[i].classList.remove('active');
						}
						e.target.classList.add('active');
						let tabsContainer = document.querySelector('.tabs-content-side');
						if (tabsContainer) {
							let allTabs = tabsContainer.querySelectorAll('.one-tab');
							let getTab = document.getElementById(getTabId);
							for (var i = allTabs.length - 1; i >= 0; i--) {
								allTabs[i].classList.remove('active');
							}
							getTab.classList.add('active');
						}
					})

				}
		}
	}
let selectNavBar = document.querySelectorAll('.select-navbar');
	if (selectNavBar) {
		for (var i = selectNavBar.length - 1; i >= 0; i--) {
			let toggleButton = selectNavBar[i].querySelector('.get-select-navbar');
			let openState = 0;
				toggleButton.addEventListener('click', function(e) {
					let ulList = e.target.parentElement.children[1];
					if (ulList) {
						let button = ulList.querySelectorAll('button');
						for (var i = button.length - 1; i >= 0; i--) {
							button[i].addEventListener('click', function(e) {
								let html = e.target.innerHTML;
								ulList.style.display = 'none';
								toggleButton.children[0].innerHTML = html;
								openState = 0;
								let buttonVal = e.target.children[1].firstChild.nodeValue;
							})
						}
					}
				})
				if (openState === 0) {
					toggleButton.addEventListener('click', function(e) {
						let ulList = e.target.parentElement.children[1];
						if (ulList) {
							ulList.style.display = 'block';
						}
					})
				} else {
					toggleButton.addEventListener('click', function(e) {
						let ulList = e.target.parentElement.children[1];
						if (ulList) {
							ulList.style.display = 'none';
						}
					})
				}
		}
	}
let allStepsContainer = document.querySelector('.all-steps-container');
	if (allStepsContainer) {
		let step = allStepsContainer.querySelectorAll('.one-step');
		for (var i = step.length - 1; i >= 0; i--) {
			let getButton = step[i].querySelector('.next-step');
				if (getButton) {
					getButton.addEventListener('click', function(e) {
						let currentStep = e.target.parentElement.parentElement.parentElement.parentElement;
						let nextStep = e.target.parentElement.parentElement.parentElement.parentElement.nextSibling.nextElementSibling;
						let fields = currentStep.querySelectorAll('.form-control')
						let allDone = false;
							for (var i = fields.length - 1; i >= 0; i--) {
								if (fields[i].validationMessage === 'Пожалуйста, заполните это поле.') {
									fields[i].classList.add('error');
									allDone = false;
								} else {
									allDone = true;
								}
							}
							if (currentStep && nextStep !== null && allDone === true) {
								currentStep.classList.remove('active');
							} else {
								if (nextStep === null) {
									return false;
								} else {
									swal ( "Ошибка" ,  "К сожалению одно из полей заполнено не верно!" ,  "error" )
								}
							}
							if (nextStep !== null && allDone === true) {
								nextStep.classList.add('active');
							} else {
								if (nextStep === null) {
									return false;
								} else {
									swal ( "Ошибка" ,  "К сожалению одно из полей заполнено не верно!" ,  "error" )
								}
							}
					})
				}
		}
	}
let fileInput = document.querySelectorAll('input[type="file"]');
	for (var i = fileInput.length - 1; i >= 0; i--) {
		fileInput[i].addEventListener('change', function(e) {
			let getVal = e.target.files[0].name;
			e.target.parentElement.children[2].children[0].value = getVal;
		})
	}
window.onload = function () {
	var form = document.getElementById('validate-form');
	if (form) {
		let submitButton = form.querySelector('button[type="submit"]');
		submitButton.onclick = function() {
			for(var i=0; i < form.elements.length; i++){
				if(form.elements[i].value === '' && form.elements[i].hasAttribute('required')){
					let inputWithIcon = form.elements[i].parentElement,
						formGroup = form.elements[i].parentElement.parentElement,
						formGroupLabel = form.elements[i].parentElement.parentElement.children[0],
						formGroupLabelHtml = formGroupLabel.innerHTML,
						beforeHTML = form.elements[i].parentElement.innerHTML;

					if (!formGroupLabel.querySelector('span')) {
						formGroup.classList.add('error');
						formGroupLabel.innerHTML += '<span class="error">Введите данные</span>';
					}

					// return false;
				}
			}
			form.submit();
		} 
	}
};
let choosePaymentContainer = document.querySelector('.choose-payment');
	if (choosePaymentContainer) {
		let ChoosePaymentButtons = choosePaymentContainer.querySelectorAll('button');
			if (ChoosePaymentButtons) {
				for (var i = ChoosePaymentButtons.length - 1; i >= 0; i--) {
					ChoosePaymentButtons[i].addEventListener('click', function(e) {
						for (var i = ChoosePaymentButtons.length - 1; i >= 0; i--) {
							ChoosePaymentButtons[i].classList.remove('active');
						}
						e.target.classList.add('active');
					})
				}
			}
	}
let mobileButton = document.getElementById('mobile-button');
	if (mobileButton) {
		let mobileSidebar = document.querySelector('.mobile-sidebar');
		let bodyTag = document.getElementsByTagName('body');
		if (mobileSidebar) {
			mobileButton.addEventListener('click', function(e) {
				mobileSidebar.classList.add('active');
				bodyTag[0].classList.add('active-sidebar');
			});
			let mobileSidebarClose = mobileSidebar.querySelectorAll('.sidebar-close');
				if (mobileSidebarClose) {
					for (var i = mobileSidebarClose.length - 1; i >= 0; i--) {
						mobileSidebarClose[i].addEventListener('click', function(e) {
							mobileSidebar.classList.remove('active');
							bodyTag[0].classList.remove('active-sidebar');
						});
					}
				}
		}
	}
let addNewInput = document.querySelectorAll('.add-new-input');
	if (addNewInput) {
		for (var i = addNewInput.length - 1; i >= 0; i--) {
			addNewInput[i].addEventListener('click', function(e) {
				e.preventDefault();

				let prevFormGroup = e.target.parentElement.previousElementSibling;
				let prevFormGroupHTML = prevFormGroup.outerHTML;
				
				prevFormGroup.parentElement.insertAdjacentHTML('afterbegin', prevFormGroupHTML);
			});
		}
	}
let clearFormLink = document.querySelector('.clear-form');
	if (clearFormLink) {
		clearFormLink.addEventListener('click', function(e) {
			e.preventDefault();
			let forms = document.querySelectorAll('form');
			for (var i = forms.length - 1; i >= 0; i--) {
				if (forms[i]) {
					let input = forms[i].querySelectorAll('input');
					if (input) {
						for (var i = input.length - 1; i >= 0; i--) {
							input[i].value = '';
						}
					}
				}
			}
		})
	}
let faqItemBox = document.querySelectorAll('.faq-item-box');
	if (faqItemBox) {
		for (var i = faqItemBox.length - 1; i >= 0; i--) {
			let getButton = faqItemBox[i].querySelector('button');
				getButton.addEventListener('click', function(e) {
					for (var i = faqItemBox.length - 1; i >= 0; i--) {
						faqItemBox[i].classList.remove('active');
					}
					let getCurrentItem = e.target.parentElement.parentElement,
						getBody = e.target.parentElement.parentElement.querySelector('.faq-body'),
						bodyHeight = getBody.offsetHeight;
						getCurrentItem.classList.add('active');
				})
		}
	}