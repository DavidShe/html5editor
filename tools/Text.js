var Text = {};

// Начинаем рисование
Text.start = function(evnt)
{
    // Текущее положение мыши - начальные координаты
    Text.x = evnt.clientX;
    Text.y = evnt.clientY;

    Canva.ctx.beginPath();
    // Свойства рисования
    Canva.ctx.strokeStyle = Canva.selectedColor;
    Canva.ctx.lineWidth = Canva.selectedWidth;
    Canva.ctx.moveTo(Text.x, Text.y); // Курсор на начальную позицию

    Canva.drawing = true; // Начато рисование
};

// Рисование закончили
Text.finish = function(evnt)
{
    Text.x = evnt.clientX;
    Text.y = evnt.clientY;
};

// Рисование в разгаре
Text.move = function(evnt)
{
    Text.x = evnt.clientX;
    Text.y = evnt.clientY;
    // Начинаем рисованть новую линию из той же точки.
    Canva.ctx.moveTo(Text.x, Text.y);
    showTextDialog(Text.x,Text.y)
};