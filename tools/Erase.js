var Erase = {};

// Начинаем рисование
Erase.start = function(evnt)
{
    // Текущее положение мыши - начальные координаты
    Erase.x = evnt.clientX;
    Erase.y = evnt.clientY;
    Erase.r = 10;

    Canva.ctx.beginPath();
    // Свойства рисования
    Canva.ctx.strokeStyle = '#ffffff';
    Canva.ctx.lineWidth = '#ffffff';
    //Canva.ctx.moveTo(Erase.x, Erase.y); // Курсор на начальную позицию

    Canva.drawing = true; // Начато рисование
};

// Рисование закончили
Erase.finish = function(evnt)
{
//    Erase.x = evnt.clientX;
//    Erase.y = evnt.clientY;
    Canva.ctx.arc(Erase.x,Erase.y,Erase.r,0,2*Math.PI,false);
    Canva.ctx.stroke();Canva.ctx.fill();

    Canva.drawing = false;
};

// Рисование в разгаре
Erase.move = function(evnt)
{
    Canva.ctx.strokeStyle = '#ffffff';
    Canva.ctx.fillStyle = '#ffffff';
    Canva.ctx.lineWidth = '#ff0000';
    Erase.x = event.x;
    Erase.y = event.y;
    Canva.ctx.moveTo(Erase.x,Erase.y);
    Canva.ctx.arc(Erase.x,Erase.y,5,0,2*Math.PI,false);
    Canva.ctx.stroke();Canva.ctx.fill();
    Canva.ctx.closePath();
    Canva.ctx.beginPath();
};