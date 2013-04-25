var Triangle = {};

// Начинаем рисование
Triangle.start = function(evnt)
{
    // Текущее положение мыши - начальные координаты
    Triangle.x = evnt.clientX;
    Triangle.y = evnt.clientY;
    Triangle.width = 100;
    Triangle.height = 50;
    Canva.ctx.beginPath();
    // Свойства рисования
    Canva.ctx.strokeStyle = Canva.selectedColor;
    Canva.ctx.lineWidth = Canva.selectedWidth;
    Canva.ctx.moveTo(Triangle.x, Triangle.y); // Курсор на начальную позицию

    Canva.drawing = true; // Начато рисование
};

// Рисование закончили
Triangle.finish = function(evnt)
{
    Triangle.x2 = evnt.clientX;
    Triangle.y2 = evnt.clientY;
    Canva.ctx.lineTo(Triangle.x2, Triangle.y2);
    Canva.ctx.moveTo(Triangle.x,Triangle.y);
    Canva.ctx.lineTo(Triangle.x2,Triangle.y);
    Canva.ctx.moveTo(Triangle.x2,Triangle.y);
    Canva.ctx.lineTo(Triangle.x2,Triangle.y2);
    Canva.ctx.stroke();
    Canva.drawing = false;
};

// Рисование в разгаре
Triangle.move = function(evnt)
{
//    Triangle.width = evnt.x - Triangle.x;
//    Triangle.height = evnt.y - Triangle.y;
    Canva.ctx.moveTo(Triangle.x, Triangle.y);
};