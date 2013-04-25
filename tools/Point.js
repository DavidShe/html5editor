var Point = {};

// Начинаем рисование
Point.start = function(evnt)
{
    // Текущее положение мыши - начальные координаты
    Point.x = evnt.clientX;
    Point.y = evnt.clientY;

    Canva.ctx.beginPath();
    // Свойства рисования
    Canva.ctx.strokeStyle = Canva.selectedColor;
    Canva.ctx.lineWidth = Canva.selectedWidth;
    Canva.ctx.moveTo(Point.x, Point.y); // Курсор на начальную позицию

    Canva.drawing = true; // Начато рисование
};

// Рисование закончили
Point.finish = function(evnt)
{
    Point.x = evnt.clientX;
    Point.y = evnt.clientY;
    Canva.ctx.rect(Point.x, Point.y,2,2); // Дорисовываем последнюю линию
    Canva.ctx.stroke();
    Canva.drawing = false;
};

// Рисование в разгаре
Point.move = function(evnt)
{
    Point.x = evnt.clientX;
    Point.y = evnt.clientY;
    // Начинаем рисованть новую линию из той же точки.
    Canva.ctx.moveTo(Point.x, Point.y);
};