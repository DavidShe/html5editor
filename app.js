var Canva = {};

Canva.init = function(id, width, height)
{
    var canv = document.getElementById(id);
    canv.width = width;
    canv.height = height;

    this.canvasId = id;

    this.ctx = canv.getContext("2d");
    // Свойства
    this.selectedColor = '#000000';
    this.selectedFillColor = '#000000';
    this.selectedWidth = 1;
    this.tool = Line; // Выбранный инструмент
    this.stype = 1;     // Тип линии
    this.drawing = false; // true - если зажата кнопка мыши

    // Кнопка мыши зажата, рисуем
    canv.onmousedown = function(e)
    {
        var evnt = ie_event(e);
        Canva.tool.start(evnt);
    };

    // Кнопка мыши отпущена, рисование прекращаем
    canv.onmouseup = function(e)
    {
        if (Canva.drawing)
        {
            var evnt = ie_event(e);
            Canva.tool.finish(evnt);
        }
    };

    // процесс рисования
    canv.onmousemove = function(e)
    {
        if (Canva.drawing)
        {
            var evnt = ie_event(e);
            Canva.tool.move(evnt);
        }
    };
};

Canva.setTool = function(t) // Задать инструмент
{
    Canva.tool = t;
};

Canva.setWidth = function(width) // Задать толщину линий
{
    Canvas.selectedWidth = width;
};

Canva.setColor = function(color) // Задать текущий цвет
{
    Canva.selectedColor = color;
};

Canva.clear = function() // Очистить рисовалку
{
    var canvas = document.getElementById(Canva.canvasId);
    Canva.ctx.clearRect(0, 0, canvas.width, canvas.height);
};

function ie_event(e)
{
    if (e === undefined)
    { return window.event; };
    return e;
}

var CP = window.CanvasRenderingContext2D && CanvasRenderingContext2D.prototype;
if (CP && CP.lineTo){
    CP.dashedLine = function(x,y,x2,y2,dashArray){
        if (!dashArray) dashArray=[10,5];
        if (dashLength==0) dashLength = 0.001; // Hack for Safari
        var dashCount = dashArray.length;
        this.moveTo(x, y);
        var dx = (x2-x), dy = (y2-y);
        var slope = dy/dx;
        var distRemaining = Math.sqrt( dx*dx + dy*dy );
        var dashIndex=0, draw=true;
        while (distRemaining>=0.1){
            var dashLength = dashArray[dashIndex++%dashCount];
            if (dashLength > distRemaining) dashLength = distRemaining;
            var xStep = Math.sqrt( dashLength*dashLength / (1 + slope*slope) );
            if (dx<0) xStep = -xStep;
            x += xStep
            y += slope*xStep;
            this[draw ? 'lineTo' : 'moveTo'](x,y);
            distRemaining -= dashLength;
            draw = !draw;
        }
    }
}

function createTextDialog(x,y){
    var a = document.createElement("div")
    a.style.position='absolute';
    a.style.width='200px';
    a.style.height='50px';
    a.style.background = 'black';
    a.style.opacity = '0.7';
    a.style.top=y+'px';
    a.style.left=x+'px';

    var input = document.createElement('input');
    input.id='itext';

    var save = document.createElement('button');
    save.innerHTML="OK";
    save.onclick = function(){
        Canva.ctx.fillText($("#itext").val(),x,y); // Дорисовываем последнюю линию
        Canva.ctx.stroke();
        hideTextDialog();
        Canva.drawing = false;
    }
    a.appendChild(input);
    a.appendChild(save);
    document.body.appendChild(a);
}

function showTextDialog(x,y){
    if($('#itext').length>0){
        $('#itext').show();
        $('#itext').css('top',y+'px');
        $('#itext').css('left',x+'px');
    }
    else
        createTextDialog(x,y);
}

function hideTextDialog(){
    $('#itext').parent().hide();
}

function convertCanvas(strType) {
    if (strType == "PNG")
        var oImg = Canvas2Image.saveAsPNG(oCanvas, true);
    if (strType == "BMP")
        var oImg = Canvas2Image.saveAsBMP(oCanvas, true);
    if (strType == "JPEG")
        var oImg = Canvas2Image.saveAsJPEG(oCanvas, true);

    if (!oImg) {
        alert("Sorry, this browser is not capable of saving " + strType + " files!");
        return false;
    }

    oImg.id = "canvasimage";

    oImg.style.border = oCanvas.style.border;
    oCanvas.parentNode.replaceChild(oImg, oCanvas);

    showDownloadText();
}

function saveCanvas(pCanvas, strType) {
    var bRes = false;
    if (strType == "PNG")
        bRes = Canvas2Image.saveAsPNG(oCanvas);
    if (strType == "BMP")
        bRes = Canvas2Image.saveAsBMP(oCanvas);
    if (strType == "JPEG")
        bRes = Canvas2Image.saveAsJPEG(oCanvas);

    if (!bRes) {
        alert("Sorry, this browser is not capable of saving " + strType + " files!");
        return false;
    }
}

function convertCanvas(strType) {
    if (strType == "PNG")
        var oImg = Canvas2Image.saveAsPNG(oCanvas, true);
    if (strType == "BMP")
        var oImg = Canvas2Image.saveAsBMP(oCanvas, true);
    if (strType == "JPEG")
        var oImg = Canvas2Image.saveAsJPEG(oCanvas, true);

    if (!oImg) {
        alert("Sorry, this browser is not capable of saving " + strType + " files!");
        return false;
    }

    oImg.id = "canvasimage";

    oImg.style.border = oCanvas.style.border;
    document.body.replaceChild(oImg, oCanvas);
}