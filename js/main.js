var elSiteHeaderSection = document.querySelector(".site-header");
var elSiteHeaderToggle = elSiteHeaderSection.querySelector(".site-header__toggler");



if( elSiteHeaderToggle){
  elSiteHeaderToggle.addEventListener("click", function(){
    elSiteHeaderSection.classList.toggle("header-open");
  });
}

var elBtnCreatePlan = document.querySelector(".btn-create");
var elOrderModal = document.querySelector('.order-modal');
elBtnCreatePlan.addEventListener("click", function () {
  elOrderModal.classList.add('order-modal--active');
})

var elOrderModalActiveSection = document.querySelector(".order-modal--active");


elOrderModal.addEventListener("click", function () {
    elOrderModal.classList.remove("order-modal--active");
})