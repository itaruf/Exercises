using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Diagnostics;

namespace Queue
{
    public class Order
    {
        public int FirstOrder;
        public int SecondOrder;
        public Order(int FirstOrder, int SecondOrder) {
            this.FirstOrder = FirstOrder;
            this.SecondOrder = SecondOrder;
        }
    }
}