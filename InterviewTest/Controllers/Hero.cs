using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace InterviewTest.Controllers
{
    public class Hero : IHero
    {
        public string name { get; set; }
        public string power { get; set; }
        public List<KeyValuePair<string, int>> stats {get;set;}
        public void evolve(int statIncrease = 5)
        {
            var i = 0;
            while (i< stats.Count)
            {
                stats[i] = new KeyValuePair<string, int> ( stats[i].Key, (int)(stats[i].Value*1.5));
                i++;
            }
        }
    }
}
