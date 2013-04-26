var Document = {};

// Начинаем рисование
Document.start = function(evnt)
{
    // Текущее положение мыши - начальные координаты
    Document.x = evnt.clientX;
    Document.y = evnt.clientY;
    Document.r = 10;

    Canva.ctx.beginPath();
    // Свойства рисования
    Canva.ctx.strokeStyle = Canva.selectedColor;
    Canva.ctx.lineWidth = Canva.selectedWidth;
    //Canva.ctx.moveTo(Document.x, Document.y); // Курсор на начальную позицию

    Canva.drawing = true; // Начато рисование
};

// Рисование закончили
Document.finish = function(evnt)
{
    Document.x2 = evnt.clientX;
    Document.y2 = evnt.clientY;
    Canva.ctx.moveTo(Document.x,Document.y);
    Canva.ctx.lineTo(Document.x+90,Document.y);
    Canva.ctx.lineTo(Document.x+90,Document.y+30);
    Canva.ctx.moveTo(Document.x,Document.y);
    Canva.ctx.lineTo(Document.x,Document.y+30);
    Canva.ctx.moveTo(Document.x,Document.y+30);
    Canva.ctx.bezierCurveTo(Document.x+20,Document.y+50,Document.x+70,Document.y+20,Document.x+90,Document.y+30);

    Canva.ctx.stroke();
    Canva.ctx.fill();
    Canva.drawing = false;
};

// Рисование в разгаре
Document.move = function(evnt)
{
    if(evnt.x>Document.x)
        Document.r = evnt.x - Document.x;
    else if(evnt.y>Document.y)
        Document.r = evnt.y-Document.y;
    // Canva.ctx.moveTo(evnt.x, evnt.y);
};