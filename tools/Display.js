var Display = {};

// Начинаем рисование
Display.start = function(evnt)
{
    // Текущее положение мыши - начальные координаты
    Display.x = evnt.clientX;
    Display.y = evnt.clientY;
    Display.width = 100;
    Display.height = 50;
    Canva.ctx.beginPath();
    // Свойства рисования
    Canva.ctx.strokeStyle = Canva.selectedColor;
    Canva.ctx.lineWidth = Canva.selectedWidth;
    Canva.ctx.fillStyle = Canva.selectedFillColor;
    Canva.ctx.moveTo(Display.x, Display.y); // Курсор на начальную позицию

    Canva.drawing = true; // Начато рисование
};

// Рисование закончили
Display.finish = function(evnt)
{
    Display.x2 = evnt.clientX;
    Display.y2 = evnt.clientY;
    Canva.ctx.moveTo(Display.x, Display.y); // Дорисовываем последнюю линию
    Canva.ctx.lineTo(Display.x+Display.width/4,Display.y+Display.height/2);
    Canva.ctx.lineTo(Display.x+Display.width,Display.y+Display.height/2);
    Canva.ctx.lineTo(Display.x+Display.width,Display.y-Display.height/2);
    Canva.ctx.lineTo(Display.x+Display.width/4,Display.y-Display.height/2);

    Canva.ctx.moveTo(Display.x+Display.width,Display.y-Display.height/2);
    Canva.ctx.arcTo(Display.x+Display.width*1.5,Display.y-Display.height /2,Display.x+Display.width,Display.y+Display.height/2);

//    Canva.ctx.lineTo(Display.x+Display.width,Display.y-50);
//    Canva.ctx.lineTo(Display.x+Display.width,Display.y);
//    Canva.ctx.lineTo()
    Canva.ctx.stroke();
    Canva.ctx.fill();
    Canva.drawing = false;
};

// Рисование в разгаре
Display.move = function(evnt)
{
    Display.width = evnt.x - Display.x;
    Display.height = evnt.y - Display.y;
    Canva.ctx.moveTo(Display.x, Display.y);
};