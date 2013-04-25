var Line = {};

// Начинаем рисование
Line.start = function(evnt)
{
    // Текущее положение мыши - начальные координаты
    Line.x = evnt.clientX;
    Line.y = evnt.clientY;

    Canva.ctx.beginPath();
    // Свойства рисования
    Canva.ctx.strokeStyle = Canva.selectedColor;
    Canva.ctx.lineWidth = Canva.selectedWidth;
    Canva.ctx.moveTo(Line.x, Line.y); // Курсор на начальную позицию

    Canva.drawing = true; // Начато рисование
};

// Рисование закончили
Line.finish = function(evnt)
{
    Line.x = evnt.clientX;
    Line.y = evnt.clientY;
    Canva.ctx.lineTo(Line.x, Line.y); // Дорисовываем последнюю линию

    Canva.drawing = false;
};

// Рисование в разгаре
Line.move = function(evnt)
{
    Line.x = evnt.clientX;
    Line.y = evnt.clientY;
    Canva.ctx.lineTo(Line.x, Line.y); // Дорисовываем начатую линию
    Canva.ctx.stroke();
    // Начинаем рисованть новую линию из той же точки.
    Canva.ctx.moveTo(Line.x, Line.y);
};