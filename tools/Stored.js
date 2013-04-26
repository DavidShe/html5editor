var Stored = {};

// Начинаем рисование
Stored.start = function(evnt)
{
    // Текущее положение мыши - начальные координаты
    Stored.x = evnt.clientX;
    Stored.y = evnt.clientY;
    Stored.r = 10;

    Canva.ctx.beginPath();
    // Свойства рисования
    Canva.ctx.strokeStyle = Canva.selectedColor;
    Canva.ctx.lineWidth = Canva.selectedWidth;

    Canva.drawing = true; // Начато рисование
};

// Рисование закончили
Stored.finish = function(evnt)
{
    Stored.x2 = evnt.clientX;
    Stored.y2 = evnt.clientY;
    Canva.ctx.moveTo(Stored.x+20,Stored.y-30);
    Canva.ctx.quadraticCurveTo(Stored.x,Stored.y,Stored.x+20,Stored.y+30);
    Canva.ctx.lineTo(Stored.x+90,Stored.y+30);
    Canva.ctx.moveTo(Stored.x+20,Stored.y-30);
    Canva.ctx.lineTo(Stored.x+90,Stored.y-30);
    Canva.ctx.moveTo(Stored.x+90,Stored.y-30);
    Canva.ctx.quadraticCurveTo(Stored.x+70,Stored.y,Stored.x+90,Stored.y+30);
    Canva.ctx.stroke();
    Canva.ctx.fill();
    Canva.drawing = false;
};

// Рисование в разгаре
Stored.move = function(evnt)
{
    if(evnt.x>Stored.x)
        Stored.r = evnt.x - Stored.x;
    else if(evnt.y>Stored.y)
        Stored.r = evnt.y-Stored.y;
    // Canva.ctx.moveTo(evnt.x, evnt.y);
};