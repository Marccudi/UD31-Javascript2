function seleccionarImg(src_imagen, alt_imagen){
    document.getElementById("img_visor").src = src_imagen;
    document.getElementById("img_visor").alt = alt_imagen;
    document.getElementById("p_visor").innerHTML = alt_imagen;
}