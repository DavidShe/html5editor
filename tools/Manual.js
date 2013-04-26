var Manual = {};

// Начинаем рисование
Manual.start = function(evnt)
{
    // Текущее положение мыши - начальные координаты
    Manual.x = evnt.clientX;
    Manual.y = evnt.clientY;
    Manual.width = 100;
    Manual.height = 50;
    Canva.ctx.beginPath();
    // Свойства рисования
    Canva.ctx.strokeStyle = Canva.selectedColor;
    Canva.ctx.lineWidth = Canva.selectedWidth;
    Canva.ctx.fillStyle = Canva.selectedFillColor;
    Canva.ctx.moveTo(Manual.x, Manual.y); // Курсор на начальную позицию

    Canva.drawing = true; // Начато рисование
};

// Рисование закончили
Manual.finish = function(evnt)
{
    Manual.x2 = evnt.clientX;
    Manual.y2 = evnt.clientY;
    Canva.ctx.moveTo(Manual.x, Manual.y); // Дорисовываем последнюю линию
    Canva.ctx.lineTo(Manual.x+Manual.width,Manual.y);
    Canva.ctx.moveTo(Manual.x,Manual.y);
    Canva.ctx.lineTo(Manual.x,Manual.y-40);
    Canva.ctx.lineTo(Manual.x+Manual.width,Manual.y-50);
    Canva.ctx.lineTo(Manual.x+Manual.width,Manual.y);
//    Canva.ctx.lineTo()
    Canva.ctx.stroke();
    Canva.ctx.fill();
    Canva.drawing = false;
};

// Рисование в разгаре
Manual.move = function(evnt)
{
    Manual.width = evnt.x - Manual.x;
    Manual.height = evnt.y - Manual.y;
    Canva.ctx.moveTo(Manual.x, Manual.y);
};