var Data = {};

// Начинаем рисование
Data.start = function(evnt)
{
    // Текущее положение мыши - начальные координаты
    Data.x = evnt.clientX;
    Data.y = evnt.clientY;
    Data.width = 100;
    Data.height = 50;
    Canva.ctx.beginPath();
    // Свойства рисования
    Canva.ctx.strokeStyle = Canva.selectedColor;
    Canva.ctx.lineWidth = Canva.selectedWidth;
    Canva.ctx.moveTo(Data.x, Data.y); // Курсор на начальную позицию

    Canva.drawing = true; // Начато рисование
};

// Рисование закончили
Data.finish = function(evnt)
{
    Data.x2 = evnt.clientX;
    Data.y2 = evnt.clientY;
    Canva.ctx.moveTo(Data.x, Data.y); // Дорисовываем последнюю линию
    Canva.ctx.lineTo(Data.x+Data.width,Data.y);
    Canva.ctx.moveTo(Data.x,Data.y);
    Canva.ctx.lineTo(Data.x+10,Data.y-40);
    Canva.ctx.lineTo(Data.x+Data.width+10,Data.y-40);
    Canva.ctx.lineTo(Data.x+Data.width,Data.y);
//    Canva.ctx.lineTo()
    Canva.ctx.stroke();
    Canva.drawing = false;
};

// Рисование в разгаре
Data.move = function(evnt)
{
    Data.width = evnt.x - Data.x;
    Data.height = evnt.y - Data.y;
    Canva.ctx.moveTo(Data.x, Data.y);
};