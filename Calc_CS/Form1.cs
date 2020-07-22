using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace Calc_CS
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
        }

        private string Operation;
        private double FirstNumber;

        private void key_digit(string this_dig)
        {
            if (display_box.Text == "0" && display_box.Text != null)
            {
                display_box.Text = this_dig;
            }
            else
            {
                display_box.Text = display_box.Text + this_dig;
            }
        }

        private void key_op(string this_op)
        {
            FirstNumber = Convert.ToDouble(display_box.Text);
            display_box.Text = "";
            Operation = this_op;
        }

        private void key_1_Click(object sender, EventArgs e)
        {
            key_digit("1");
        }

        private void key_2_Click(object sender, EventArgs e)
        {
            key_digit("2");
        }

        private void key_3_Click(object sender, EventArgs e)
        {
            key_digit("3");
        }

        private void key_4_Click(object sender, EventArgs e)
        {
            key_digit("4");
        }

        private void key_5_Click(object sender, EventArgs e)
        {
            key_digit("5");
        }

        private void key_6_Click(object sender, EventArgs e)
        {
            key_digit("6");
        }

        private void key_7_Click(object sender, EventArgs e)
        {
            key_digit("7");
        }

        private void key_8_Click(object sender, EventArgs e)
        {
            key_digit("8");
        }

        private void key_9_Click(object sender, EventArgs e)
        {
            key_digit("9");
        }

        private void key_0_Click(object sender, EventArgs e)
        {
            key_digit("0");
        }

        private void key_decimal_Click(object sender, EventArgs e)
        {
            key_digit(".");
        }

        private void key_equal_Click(object sender, EventArgs e)
        {
            double SecondNumber;
            double Result;

            SecondNumber = Convert.ToDouble(display_box.Text);

            if (Operation == "+")
            {
                Result = (FirstNumber + SecondNumber);
                display_box.Text = Convert.ToString(Result);
                FirstNumber = Result;
            }
            if (Operation == "-")
            {
                Result = (FirstNumber - SecondNumber);
                display_box.Text = Convert.ToString(Result);
                FirstNumber = Result;
            }
            if (Operation == "*")
            {
                Result = (FirstNumber * SecondNumber);
                display_box.Text = Convert.ToString(Result);
                FirstNumber = Result;
            }
            if (Operation == "/")
            {
                if (SecondNumber == 0)
                {
                    display_box.Text = "Cannot divide by zero";

                }
                else
                {
                    Result = (FirstNumber / SecondNumber);
                    display_box.Text = Convert.ToString(Result);
                    FirstNumber = Result;
                }
            }
        }

        private void key_plus_Click(object sender, EventArgs e)
        {
            key_op("+");
        }

        private void key_minus_Click(object sender, EventArgs e)
        {
            key_op("-");
        }

        private void key_multiply_Click(object sender, EventArgs e)
        {
            key_op("*");
        }

        private void key_divide_Click(object sender, EventArgs e)
        {
            key_op("/");
        }

        private void key_CE_Click(object sender, EventArgs e)
        {
            display_box.Text = "";
        }

        private void key_C_Click(object sender, EventArgs e)
        {
            if(display_box.Text.Length > 0)
            {
                display_box.Text = display_box.Text.Remove(display_box.Text.Length - 1, 1);
            }
        }
        
    }
}
