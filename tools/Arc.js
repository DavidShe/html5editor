var Arc = {};

// Начинаем рисование
Arc.start = function(evnt)
{
    // Текущее положение мыши - начальные координаты
    Arc.x = evnt.clientX;
    Arc.y = evnt.clientY;
    Arc.r = 10;

    Canva.ctx.beginPath();
    // Свойства рисования
    Canva.ctx.strokeStyle = Canva.selectedColor;
    Canva.ctx.lineWidth = Canva.selectedWidth;
    //Canva.ctx.moveTo(Arc.x, Arc.y); // Курсор на начальную позицию

    Canva.drawing = true; // Начато рисование
};

// Рисование закончили
Arc.finish = function(evnt)
{
//    Arc.x = evnt.clientX;
//    Arc.y = evnt.clientY;
    Canva.ctx.arc(Arc.x,Arc.y,Arc.r,0,Math.PI,false);
    Canva.ctx.stroke();
    Canva.drawing = false;
};

// Рисование в разгаре
Arc.move = function(evnt)
{
    if(evnt.x>Arc.x)
        Arc.r = evnt.x - Arc.x;
    else if(evnt.y>Arc.y)
        Arc.r = evnt.y-Arc.y;
    // Canva.ctx.moveTo(evnt.x, evnt.y);
};