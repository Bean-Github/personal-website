import TopBar from '../TopBar';

const poems = [

    { 
    id: 1, 
    title: "Salinger", 
    publisher: "The Round Magazine @ Brown University", 
    date: "Dec 2025", 
    link: "https://docs.google.com/document/d/1XzSyr0svbgye_lomyKEXmVAmPkIzzykJ/edit?usp=sharing&ouid=101167706682616387471&rtpof=true&sd=true" 
  },

  { 
    id: 2, 
    title: "Eggs", 
    publisher: "The Madison Review", 
    date: "Apr 2025", 
    link: "https://issuu.com/themadisonreview/docs/tmr_x_people_s_farm_zine_updated_proof_1233a_3_" 
  },
];

function Poetry() {
  return (
    <div className="min-h-screen bg-[#fafaf9] text-[#2c2c2c] font-serif">
      <TopBar />

      <main className="max-w-2xl mx-auto px-8 py-20">
        <header className="mb-16 mt-10">
          <h1 className="font-proxima-nova text-sm uppercase tracking-[0.2em] opacity-50">poems</h1>
        </header>

        <ul className="space-y-8">
          {poems.map(poem => (
            <li key={poem.id} className="group">
              <a 
                href={poem.link} 
                className="flex flex-col md:flex-row md:items-end md:justify-between"
              >
                <div className="flex flex-col gap-3">
                  {/* Poem Title */}
                  <h2 className="text-2xl font-light italic transition-all duration-300 group-hover:pl-4">
                    {poem.title}
                  </h2>

                  {/* Publisher and Date Metadata */}
                  <span className="font-proxima-nova text-[10px] uppercase tracking-[0.15em] opacity-40 transition-all duration-300 group-hover:pl-4">
                    {poem.publisher} — {poem.date}
                  </span>
                  
                </div>

                {/* Hover Action Label */}
                <span className="text-xs uppercase tracking-widest opacity-0 group-hover:opacity-80 transition-opacity duration-500 font-proxima-nova mt-4 md:mt-0">
                  Read Poem
                </span>
              </a>
              
              {/* Animated Underline */}
              <div className="h-[1px] w-full bg-gray-200 mt-4 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}

export default Poetry;