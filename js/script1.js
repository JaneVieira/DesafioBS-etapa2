function solicitar() {
    let vinculo = document.getElementById("vinculo").value;
    let titulo = document.getElementById("titulo").value;
    let autor = document.getElementById("autor").value;
    let edicao = document.getElementById("edicao").value;
    let issn = document.getElementById("issn").value;
    let ano = document.getElementById("ano").value;
    let editora = document.getElementById("editora").value;
    console.log('vinculo',vinculo);
    console.log('titulo', titulo);
    console.log('autor', autor);
    console.log('edicao', edicao);
    console.log('issn', issn);
    console.log('ano', ano);
    console.log('editora', editora);

    if (vinculo == "") {
        alert("O vinculo é um campo obrigatorio.");
        return false;
    }
    if (titulo == "") {
        alert("O titulo é um campo obrigatorio.");
        return false;
    }
    if (autor == "") {
        alert("O autor é um campo obrigatorio.");
        return false;    
    }
    if (ano != "") {
        if (parseInt(ano) < 1900 || parseInt(ano) > 2019) {
            alert("Favor informar ano entre 1900-2019.");
            return false;    
        }
    }

    adicionaLinha(vinculo, titulo, autor, edicao, issn, ano, editora);

}

function setInputFilter(textbox, inputFilter) {
    ["input", "keydown", "keyup", "mousedown", "mouseup", "select", "contextmenu", "drop"].forEach(function(event) {
      textbox.addEventListener(event, function() {
        if (inputFilter(this.value)) {
          this.oldValue = this.value;
          this.oldSelectionStart = this.selectionStart;
          this.oldSelectionEnd = this.selectionEnd;
        } else if (this.hasOwnProperty("oldValue")) {
          this.value = this.oldValue;
          this.setSelectionRange(this.oldSelectionStart, this.oldSelectionEnd);
        } else {
          this.value = "";
        }
      });
    });
}

function carregaFiltros(){
    setInputFilter(document.getElementById('edicao'), function(value) {
        return /^-?\d*$/.test(value); });


       setInputFilter(document.getElementById('ano'), function(value) {
        return (/^-?\d*$/.test(value));
    });
        setInputFilter(document.getElementById('issn'), function(value) {
            return /^-?\d*$/.test(value); 
      });
}

function adicionaLinha(vinculo, titulo, autor, edicao, issn, ano, editora) {
    
    let tr = document.createElement('tr');
    tr.addEventListener('dblclick', function () {tr.parentNode.removeChild(tr);});

    let tdVinculo = document.createElement('td');
    let textoVinculo = document.createTextNode(vinculo);
    tdVinculo.appendChild(textoVinculo);
    tr.appendChild(tdVinculo);

    let tdTitulo = document.createElement('td');
    let textoTitulo = document.createTextNode(titulo);
    tdTitulo.appendChild(textoTitulo);
    tr.appendChild(tdTitulo);

    let tdAutor = document.createElement('td');
    let textoAutor = document.createTextNode(autor);
    tdAutor.appendChild(textoAutor);
    tr.appendChild(tdAutor);

    let tdEdicao = document.createElement('td');
    let textoEdicao = document.createTextNode(edicao);
    tdEdicao.appendChild(textoEdicao);
    tr.appendChild(tdEdicao);

    let tdIssn = document.createElement('td');
    let textoIssn = document.createTextNode(issn);
    tdIssn.appendChild(textoIssn);
    tr.appendChild(tdIssn);

    let tdAno = document.createElement('td');
    let textoAno = document.createTextNode(ano);
    tdAno.appendChild(textoAno);
    tr.appendChild(tdAno);

    let tdEditora = document.createElement('td');
    let textoEditora = document.createTextNode(editora);
    tdEditora.appendChild(textoEditora);
    tr.appendChild(tdEditora);

    document.getElementById('tbody').appendChild(tr);
    apagaForm();
}

function apagaForm() {
    document.getElementById("vinculo").value = '';
    document.getElementById("titulo").value = '';
    document.getElementById("autor").value = '';
    document.getElementById("edicao").value = '';
    document.getElementById("issn").value = '';
    document.getElementById("ano").value = '';
    document.getElementById("editora").value = '';

}