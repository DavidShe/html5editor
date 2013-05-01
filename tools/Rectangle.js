var Rectangle = {};

// Начинаем рисование
Rectangle.start = function(evnt)
{
    // Текущее положение мыши - начальные координаты
    Rectangle.x = evnt.clientX;
    Rectangle.y = evnt.clientY;
    Rectangle.width = 100;
    Rectangle.height = 50;
    Canva.ctx.beginPath();
    // Свойства рисования
    Canva.ctx.strokeStyle = Canva.selectedColor;
    Canva.ctx.fillStyle = Canva.selectedFillColor;
    Canva.ctx.lineWidth = Canva.selectedWidth;
    Canva.ctx.moveTo(Rectangle.x, Rectangle.y); // Курсор на начальную позицию

    Canva.drawing = true; // Начато рисование
};

// Рисование закончили
Rectangle.finish = function(evnt)
{
    Rectangle.x = evnt.clientX;
    Rectangle.y = evnt.clientY;
    Canva.ctx.rect(Rectangle.x, Rectangle.y,Rectangle.width,Rectangle.height); // Дорисовываем последнюю линию
    Canva.ctx.stroke();
    Canva.ctx.fill();
    Canva.drawing = false;
};

// Рисование в разгаре
Rectangle.move = function(evnt)
{
    Rectangle.width = evnt.x - Rectangle.x;
    Rectangle.height = evnt.y - Rectangle.y;
    Canva.ctx.moveTo(Rectangle.x, Rectangle.y);
};