namespace Exercices_4._4
{
    internal class Program
    {
        static void Main(string[] args)
        {
            int[] array = { 128, 64, 8, 512, 16, 32, 256 };

            
            // 

            for (int a = 0; a <  array.Length; a++) 
            {
                int indiceJ = a;

                for (int j = a + 1; j < array.Length; j++)
                {
                    if (array[j] < array[indiceJ])
                    {
                        indiceJ = j;
                    }
                }

                int temp = array[indiceJ];
                array[indiceJ] = array[a];
                array[a] = temp;

                Console.Write(array[a] + " ");
                
            }

            Console.ReadKey();
        }
    }
}