namespace ClassLibraryPoint
{
    public class Point
    {
        private float positionY;
        private float positionX;


        public float PositionY { get => positionY; private set => positionY = value; }
        public float PositionX { get => positionX; private set => positionX = value; }
        public Point()
        {
            positionX = 0;
            positionX = 0;

        }
        public Point(float _positionY, float _positionX)
        {
            this.positionY = _positionY;
            this.positionX = _positionX;
        }

        public Point(Point pointClone)
        {
            this.positionY = pointClone.positionY;
            this.positionX = pointClone.positionX;
        }

        public void Deplacer(float _positionY, float _poisitionX)
        {
            this.positionY += _positionY;
            this.positionX += _poisitionX;
        }

        public void Permuter()
        {
            float tmp;
            tmp = this.positionY;
            this.positionY = this.positionX;
            this.positionX = tmp;
        }
        public Point SymetrieAxeAbscisse()
        {
            return  new Point(positionY , -positionX); ;
        }
        public Point SymetrieAxeOrdonee()
        { 
            return new Point(-positionY, positionX); ;
        }
        public Point SymetrieOrigine()
        {
            return new Point(-positionY, -positionX); ;
        }
        public override string ToString()
        {
            return "\n Position Y " + this.positionY +
                "\n Poistion X " + this.positionX;
        }
    }
}
