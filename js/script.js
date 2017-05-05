function loadjscssfile(filename, filetype){
    if (filetype=="js"){ //if filename is a external JavaScript file
        var fileref=document.createElement('script')
        fileref.setAttribute("type","text/javascript")
        fileref.setAttribute("src", filename)
    }
    else if (filetype=="css"){ //if filename is an external CSS file
        var fileref=document.createElement("link")
        fileref.setAttribute("rel", "stylesheet")
        fileref.setAttribute("type", "text/css")
        fileref.setAttribute("href", filename)
    }
    if (typeof fileref!="undefined")
        document.getElementsByTagName("head")[0].appendChild(fileref)
}
loadjscssfile("js/jquery-2.1.1.js", "js") //dynamically load and add this .js file
loadjscssfile("js/swiper.min.js", "js") //dynamically load and add this .js file
loadjscssfile("js/main.js", "js") //dynamically load and add this .js file
loadjscssfile("js/bootstrap.min.js", "js") //dynamically load and add this .js file
loadjscssfile("js/modernizr.js", "js") //dynamically load and add this .js file
