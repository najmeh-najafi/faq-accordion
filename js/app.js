const faqs=document.querySelectorAll(".faq-item");
faqs.forEach(faq=>{
     faq.addEventListener("click",()=>{
         if(faq.classList.contains("active")){
            faqs.forEach(item=>{
                item.classList.remove("active");
                item.removeAttribute("style")
            })
         }else{
            faqs.forEach(item=>{
                item.classList.remove("active");
                item.removeAttribute("style")
            })
            faq.classList.add("active");
            let faqContent=null;
            faq.childNodes.forEach(child=>{
                if(child.classList){
                    if(child.classList.contains("faq-item__answer")) faqContent=child
                }
            })
            const maxHeigth=faq.offsetHeight+faqContent.offsetHeight+10;
            faq.style.height=`${maxHeigth}px`
         }
        
     })
})