var Ellipse = {};

// Начинаем рисование
Ellipse.start = function(evnt)
{
    // Текущее положение мыши - начальные координаты
    Ellipse.x = evnt.clientX;
    Ellipse.y = evnt.clientY;
    Ellipse.r = 10;

    Canva.ctx.beginPath();
    // Свойства рисования
    Canva.ctx.strokeStyle = Canva.selectedColor;
    Canva.ctx.lineWidth = Canva.selectedWidth;
    //Canva.ctx.moveTo(Ellipse.x, Ellipse.y); // Курсор на начальную позицию

    Canva.drawing = true; // Начато рисование
};

// Рисование закончили
Ellipse.finish = function(evnt)
{
//    Ellipse.x = evnt.clientX;
//    Ellipse.y = evnt.clientY;
    Canva.ctx.arc(Ellipse.x,Ellipse.y,Ellipse.r,0,2*Math.PI,false);
    Canva.ctx.stroke();Canva.ctx.fill();

    Canva.drawing = false;
};

// Рисование в разгаре
Ellipse.move = function(evnt)
{
    if(evnt.x>Ellipse.x)
        Ellipse.r = evnt.x - Ellipse.x;
    else if(evnt.y>Ellipse.y)
        Ellipse.r = evnt.y-Ellipse.y;
   // Canva.ctx.moveTo(evnt.x, evnt.y);
};