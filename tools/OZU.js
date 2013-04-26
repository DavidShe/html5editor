var OZU = {};

// Начинаем рисование
OZU.start = function(evnt)
{
    // Текущее положение мыши - начальные координаты
    OZU.x = evnt.clientX;
    OZU.y = evnt.clientY;
    OZU.width = 100;
    OZU.height = 50;
    Canva.ctx.beginPath();
    // Свойства рисования
    Canva.ctx.strokeStyle = Canva.selectedColor;
    Canva.ctx.lineWidth = Canva.selectedWidth;
    Canva.ctx.moveTo(OZU.x, OZU.y); // Курсор на начальную позицию

    Canva.drawing = true; // Начато рисование
};

// Рисование закончили
OZU.finish = function(evnt)
{
    OZU.x = evnt.clientX;
    OZU.y = evnt.clientY;
    Canva.ctx.rect(OZU.x, OZU.y,OZU.width,OZU.height); // Дорисовываем последнюю линию
    Canva.ctx.moveTo(OZU.x+OZU.width/5,OZU.y);
    Canva.ctx.lineTo(OZU.x+OZU.width/5,OZU.y+OZU.height);
    Canva.ctx.moveTo(OZU.x,OZU.y+OZU.height/5);
    Canva.ctx.lineTo(OZU.x+OZU.width,OZU.y+OZU.height/5);
    Canva.ctx.stroke();
    Canva.ctx.fill();
    Canva.drawing = false;
};

// Рисование в разгаре
OZU.move = function(evnt)
{
    OZU.width = evnt.x - OZU.x;
    OZU.height = evnt.y - OZU.y;
    Canva.ctx.moveTo(OZU.x, OZU.y);
};