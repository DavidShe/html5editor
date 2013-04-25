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
    this.selectedFillColor = '#FFFFFF';
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
    var canv = document.getElementById(Canva.canvasId);
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


$("#controls").click(function(){
   Canva.setTool($(this).html());
});