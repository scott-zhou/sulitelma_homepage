function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

function setNavbarItem(id, text, url) {
    if(document.getElementById('nbs_'+id)) {
        document.getElementById('nbs_'+id).innerHTML  = text
        document.getElementById('nbs_'+id).href  = url
    }
    if(document.getElementById('nb_'+id)) {
        document.getElementById('nb_'+id).innerHTML  = text
        document.getElementById('nb_'+id).href  = url
    }
}

function setSwedishNavbar() {
    document.getElementById('html_element').lang = 'sv'
    setNavbarItem('intro', 'About SULITELMA', 'index.html?page=intro&lang=sv')
    setNavbarItem('sweden', 'Sverige', 'index.html?page=sweden&lang=sv')
    setNavbarItem('culture', 'Culture', 'index.html?page=culture&lang=sv')
    setNavbarItem('weather', 'Weather', 'index.html?page=weather&lang=sv')
    document.getElementById('nbs_sweden').style.display = "none";
    document.getElementById('nb_sweden').style.display = "none";
    document.getElementById('nbs_culture').style.display = "none";
    document.getElementById('nbs_weather').style.display = "none";
    setNavbarItem('project', 'Project', 'index.html?page=project&lang=sv')
    document.getElementById('nbs_mariefred').style.display = "none";
    document.getElementById('nbs_pic').style.display = "none";
    document.getElementById('nbs_onrequest').style.display = "none";
    document.getElementById('nbs_floorplan').style.display = "none";
    setNavbarItem('service', 'Service', 'index.html?page=service&lang=sv')
    setNavbarItem('contact', 'Contact', 'index.html?page=contact&lang=sv')
}

function setChineseNavbar() {
    document.getElementById('html_element').lang = 'zh_CN'
    setNavbarItem('intro', '公司简介', 'index.html?page=intro&lang=cn')

    setNavbarItem('sweden', '瑞典', 'index.html?page=sweden&lang=cn')
    setNavbarItem('culture', '文化', 'index.html?page=culture&lang=cn')
    setNavbarItem('weather', '气候', 'index.html?page=weather&lang=cn')

    setNavbarItem('project',   '项目',      'index.html?page=project&lang=cn')
    setNavbarItem('mariefred', '玛丽弗雷德', 'index.html?page=mariefred&lang=cn')
    setNavbarItem('pic',       '房屋效果图', 'index.html?page=pic&lang=cn')
    setNavbarItem('onrequest', '房屋自建',   'index.html?page=onrequest&lang=cn')
    setNavbarItem('floorplan', '房型图',     'index.html?page=floorplan&lang=cn')

    setNavbarItem('service', '服务', 'index.html?page=service&lang=cn')
    setNavbarItem('contact', '联系方式', 'index.html?page=contact&lang=cn')
}

function setPageContent(pagename, language) {
    if(document.getElementById("nbs_"+pagename+"_bar")) {
        document.getElementById("nbs_"+pagename+"_bar").className = 'active'
    }
    if(document.getElementById("nb_"+pagename+"_bar")) {
        document.getElementById("nb_"+pagename+"_bar").className = 'active'
    }
    document.getElementById("sverige_lang").href = 'index.html?page='+pagename+'&lang=sv'
    document.getElementById("chinese_lang").href = 'index.html?page='+pagename+'&lang=cn'
    if(language == 'sv') {
        $("#main").load(pagename+"_sv.html");
    }
    else {
        $("#main").load(pagename+"_cn.html");
    }
}

function isInArray(value, array) {
  return array.indexOf(value) > -1;
}
