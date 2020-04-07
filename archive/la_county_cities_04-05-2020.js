var laCitiesData = [
	{ place: "Acton, Los Angeles", confirmed: -1, deaths: -1, recovered: -1, active: -1, coord:[34.469994,-118.196742]},
	{ place: "Adams-Normandie, Los Angeles", confirmed: 13, deaths: -1, recovered: -1, active: -1, coord:[34.034344,-118.299314]},
	{ place: "Agoura Hills, Los Angeles", confirmed: 18, deaths: -1, recovered: -1, active: -1, coord:[34.153340,-118.761676]},
	{ place: "Agua Dulce, Los Angeles", confirmed: -1, deaths: -1, recovered: -1, active: -1, coord:[34.496382,-118.325635]},
	{ place: "Alhambra, Los Angeles", confirmed: 21, deaths: -1, recovered: -1, active: -1, coord:[34.095287,-118.127015]},
	{ place: "Alsace, Los Angeles", confirmed: -1, deaths: -1, recovered: -1, active: -1, coord:[33.978611,-118.415556]},
	{ place: "Altadena, Los Angeles", confirmed: 25, deaths: -1, recovered: -1, active: -1, coord:[34.190162,-118.131319]},
	{ place: "Anaverde, Los Angeles", confirmed: 0, deaths: -1, recovered: -1, active: -1, coord:[34.553257,-118.152036]},
	{ place: "Angeles National Forest, Los Angeles", confirmed: 0, deaths: -1, recovered: -1, active: -1, coord:[34.316657,-118.005777]},
	{ place: "Angelino Heights, Los Angeles", confirmed: 0, deaths: -1, recovered: -1, active: -1, coord:[34.070289,-118.254796]},
	{ place: "Arcadia, Los Angeles", confirmed: 14, deaths: -1, recovered: -1, active: -1, coord:[34.139729,-118.035345]},
	{ place: "Arleta, Los Angeles", confirmed: 15, deaths: -1, recovered: -1, active: -1, coord:[34.250459,-118.433835]},
	{ place: "Artesia, Los Angeles", confirmed: -1, deaths: -1, recovered: -1, active: -1, coord:[33.865848,-118.083121]},
	{ place: "Athens Village, Los Angeles", confirmed: -1, deaths: -1, recovered: -1, active: -1, coord:[33.920015,-118.281184]},
	{ place: "Athens-Westmont, Los Angeles", confirmed: 22, deaths: -1, recovered: -1, active: -1, coord:[33.923966,-118.300355]},
	{ place: "Atwater Village, Los Angeles", confirmed: 6, deaths: -1, recovered: -1, active: -1, coord:[34.117290,-118.261433]},
	{ place: "Avalon, Los Angeles", confirmed: 0, deaths: -1, recovered: -1, active: -1, coord:[34.102741,-118.327222]},
	{ place: "Avocado Heights, Los Angeles", confirmed: 0, deaths: -1, recovered: -1, active: -1, coord:[34.036122,-117.991176]},
	{ place: "Azusa, Los Angeles", confirmed: -1, deaths: -1, recovered: -1, active: -1, coord:[34.133619,-117.907563]},
	{ place: "Baldwin Hills, Los Angeles", confirmed: 20, deaths: -1, recovered: -1, active: -1, coord:[34.018199,-118.340351]},
	{ place: "Baldwin Park, Los Angeles", confirmed: 10, deaths: -1, recovered: -1, active: -1, coord:[34.085287,-117.960898]},
	{ place: "Bassett, Los Angeles", confirmed: -1, deaths: -1, recovered: -1, active: -1, coord:[34.029381,-118.387447]},
	{ place: "Bel Air, Los Angeles", confirmed: 18, deaths: -1, recovered: -1, active: -1, coord:[34.100245,-118.459463]},
	{ place: "Bell Gardens, Los Angeles", confirmed: 12, deaths: -1, recovered: -1, active: -1, coord:[33.965292,-118.151459]},
	{ place: "Bell, Los Angeles", confirmed: 20, deaths: -1, recovered: -1, active: -1, coord:[33.977514,-118.187016]},
	{ place: "Bellflower, Los Angeles", confirmed: 32, deaths: -1, recovered: -1, active: -1, coord:[33.881682,-118.117012]},
	{ place: "Beverly Crest, Los Angeles", confirmed: 25, deaths: -1, recovered: -1, active: -1, coord:[34.101295,-118.416254]},
	{ place: "Beverly Hills, Los Angeles", confirmed: 65, deaths: -1, recovered: -1, active: -1, coord:[34.073620,-118.400356]},
	{ place: "Beverlywood, Los Angeles", confirmed: 17, deaths: -1, recovered: -1, active: -1, coord:[34.049413,-118.395232]},
	{ place: "Bouquet Canyon, Los Angeles", confirmed: 0, deaths: -1, recovered: -1, active: -1, coord:[34.524126,-118.441440]},
	{ place: "Boyle Heights, Los Angeles", confirmed: 37, deaths: -1, recovered: -1, active: -1, coord:[34.029789,-118.211726]},
	{ place: "Bradbury, Los Angeles", confirmed: 0, deaths: -1, recovered: -1, active: -1, coord:[34.050604,-118.247857]},
	{ place: "Brentwood, Los Angeles", confirmed: 49, deaths: -1, recovered: -1, active: -1, coord:[34.052101,-118.473246]},
	{ place: "Brookside, Los Angeles", confirmed: 0, deaths: -1, recovered: -1, active: -1, coord:[34.062151,-118.338497]},
	{ place: "Burbank, Los Angeles", confirmed: 70, deaths: -1, recovered: -1, active: -1, coord:[34.180839,-118.308966]},
	{ place: "Cadillac-Corning, Los Angeles", confirmed: -1, deaths: -1, recovered: -1, active: -1, coord:[34.052234,-118.243685]},
	{ place: "Calabasas, Los Angeles", confirmed: 20, deaths: -1, recovered: -1, active: -1, coord:[34.136721,-118.661481]},
	{ place: "Canoga Park, Los Angeles", confirmed: 32, deaths: -1, recovered: -1, active: -1, coord:[34.208254,-118.605861]},
	{ place: "Canyon Country, Los Angeles", confirmed: 8, deaths: -1, recovered: -1, active: -1, coord:[34.423543,-118.472063]},
	{ place: "Carson, Los Angeles", confirmed: 83, deaths: -1, recovered: -1, active: -1, coord:[33.831674,-118.281693]},
	{ place: "Carthay, Los Angeles", confirmed: 26, deaths: -1, recovered: -1, active: -1, coord:[34.055838,-118.368030]},
	{ place: "Castaic, Los Angeles", confirmed: 5, deaths: -1, recovered: -1, active: -1, coord:[34.489036,-118.625655]},
	{ place: "Central, Los Angeles", confirmed: 24, deaths: -1, recovered: -1, active: -1, coord:[34.068675,-118.322817]},
	{ place: "Century City, Los Angeles", confirmed: 23, deaths: -1, recovered: -1, active: -1, coord:[34.053661,-118.413389]},
	{ place: "Century Palms/Cove, Los Angeles", confirmed: 17, deaths: -1, recovered: -1, active: -1, coord:[33.945329,-118.273205]},
	{ place: "Cerritos, Los Angeles", confirmed: 20, deaths: -1, recovered: -1, active: -1, coord:[33.858348,-118.064787]},
	{ place: "Chatsworth, Los Angeles", confirmed: 24, deaths: -1, recovered: -1, active: -1, coord:[34.250636,-118.614810]},
	{ place: "Cheviot Hills, Los Angeles", confirmed: 10, deaths: -1, recovered: -1, active: -1, coord:[34.040340,-118.404201]},
	{ place: "Chinatown, Los Angeles", confirmed: -1, deaths: -1, recovered: -1, active: -1, coord:[34.062334,-118.238331]},
	{ place: "Claremont, Los Angeles", confirmed: 5, deaths: -1, recovered: -1, active: -1, coord:[34.096676,-117.719779]},
	{ place: "Cloverdale/Cochran, Los Angeles", confirmed: 10, deaths: -1, recovered: -1, active: -1, coord:[34.062379,-118.346570]},
	{ place: "Commerce, Los Angeles", confirmed: 0, deaths: -1, recovered: -1, active: -1, coord:[34.000569,-118.159793]},
	{ place: "Compton, Los Angeles", confirmed: 34, deaths: -1, recovered: -1, active: -1, coord:[33.895849,-118.220071]},
	{ place: "Country Club Park, Los Angeles", confirmed: 12, deaths: -1, recovered: -1, active: -1, coord:[34.050289,-118.321187]},
	{ place: "Covina (Charter Oak), Los Angeles", confirmed: -1, deaths: -1, recovered: -1, active: -1, coord:[34.099441,-117.846397]},
	{ place: "Covina, Los Angeles", confirmed: 28, deaths: -1, recovered: -1, active: -1, coord:[34.090009,-117.890340]},
	{ place: "Crenshaw District, Los Angeles", confirmed: 9, deaths: -1, recovered: -1, active: -1, coord:[34.018199,-118.340351]},
	{ place: "Crestview, Los Angeles", confirmed: 23, deaths: -1, recovered: -1, active: -1, coord:[34.047885,-118.380425]},
	{ place: "Cudahy, Los Angeles", confirmed: 15, deaths: -1, recovered: -1, active: -1, coord:[33.960865,-118.185786]},
	{ place: "Culver City, Los Angeles", confirmed: 26, deaths: -1, recovered: -1, active: -1, coord:[34.021122,-118.396467]},
	{ place: "Del Aire, Los Angeles", confirmed: -1, deaths: -1, recovered: -1, active: -1, coord:[33.916125,-118.369520]},
	{ place: "Del Rey, Los Angeles", confirmed: 27, deaths: -1, recovered: -1, active: -1, coord:[33.985996,-118.424912]},
	{ place: "Del Sur, Los Angeles", confirmed: 0, deaths: -1, recovered: -1, active: -1, coord:[34.280082,-118.426542]},
	{ place: "Desert View Highlands, Los Angeles", confirmed: 0, deaths: -1, recovered: -1, active: -1, coord:[34.590823,-118.152574]},
	{ place: "Diamond Bar, Los Angeles", confirmed: 12, deaths: -1, recovered: -1, active: -1, coord:[34.028623,-117.810337]},
	{ place: "Downey, Los Angeles", confirmed: 68, deaths: -1, recovered: -1, active: -1, coord:[33.940109,-118.133159]},
	{ place: "Downtown, Los Angeles", confirmed: 19, deaths: -1, recovered: -1, active: -1, coord:[34.040713,-118.246769]},
	{ place: "Duarte, Los Angeles", confirmed: -1, deaths: -1, recovered: -1, active: -1, coord:[34.139451,-117.977287]},
	{ place: "Eagle Rock, Los Angeles", confirmed: 21, deaths: -1, recovered: -1, active: -1, coord:[34.139157,-118.214088]},
	{ place: "East Covina, Los Angeles", confirmed: 0, deaths: -1, recovered: -1, active: -1, coord:[34.068621,-117.938953]},
	{ place: "East Hollywood, Los Angeles", confirmed: 16, deaths: -1, recovered: -1, active: -1, coord:[34.091341,-118.293589]},
	{ place: "East La Mirada, Los Angeles", confirmed: -1, deaths: -1, recovered: -1, active: -1, coord:[33.924458,-117.988952]},
	{ place: "East Lancaster, Los Angeles", confirmed: 0, deaths: -1, recovered: -1, active: -1, coord:[34.686785,-118.154163]},
	{ place: "East Los Angeles, Los Angeles", confirmed: 44, deaths: -1, recovered: -1, active: -1, coord:[34.022442,-118.166974]},
	{ place: "East Pasadena, Los Angeles", confirmed: 0, deaths: -1, recovered: -1, active: -1, coord:[34.138238,-118.074225]},
	{ place: "East Rancho Dominguez, Los Angeles", confirmed: 6, deaths: -1, recovered: -1, active: -1, coord:[33.896201,-118.193373]},
	{ place: "East Whittier, Los Angeles", confirmed: -1, deaths: -1, recovered: -1, active: -1, coord:[33.924458,-117.988952]},
	{ place: "Echo Park, Los Angeles", confirmed: 9, deaths: -1, recovered: -1, active: -1, coord:[34.078159,-118.260557]},
	{ place: "El Camino Village, Los Angeles", confirmed: -1, deaths: -1, recovered: -1, active: -1, coord:[33.889460,-118.330907]},
	{ place: "El Monte, Los Angeles", confirmed: 18, deaths: -1, recovered: -1, active: -1, coord:[34.068621,-118.027567]},
	{ place: "El Segundo, Los Angeles", confirmed: 7, deaths: -1, recovered: -1, active: -1, coord:[33.919180,-118.416465]},
	{ place: "El Sereno, Los Angeles", confirmed: 18, deaths: -1, recovered: -1, active: -1, coord:[34.073581,-118.178641]},
	{ place: "Elizabeth Lake, Los Angeles", confirmed: 0, deaths: -1, recovered: -1, active: -1, coord:[34.659834,-118.392016]},
	{ place: "Elysian Park, Los Angeles", confirmed: 5, deaths: -1, recovered: -1, active: -1, coord:[34.083804,-118.236581]},
	{ place: "Elysian Valley, Los Angeles", confirmed: -1, deaths: -1, recovered: -1, active: -1, coord:[34.096654,-118.242662]},
	{ place: "Encino, Los Angeles", confirmed: 39, deaths: -1, recovered: -1, active: -1, coord:[34.151749,-118.521428]},
	{ place: "Exposition Park, Los Angeles", confirmed: 28, deaths: -1, recovered: -1, active: -1, coord:[34.014938,-118.286198]},
	{ place: "Exposition, Los Angeles", confirmed: 0, deaths: -1, recovered: -1, active: -1, coord:[34.014938,-118.286198]},
	{ place: "Faircrest Heights, Los Angeles", confirmed: -1, deaths: -1, recovered: -1, active: -1, coord:[34.047646,-118.371031]},
	{ place: "Figueroa Park Square, Los Angeles", confirmed: -1, deaths: -1, recovered: -1, active: -1, coord:[33.960235,-118.283982]},
	{ place: "Florence-Firestone, Los Angeles", confirmed: 63, deaths: -1, recovered: -1, active: -1, coord:[33.967198,-118.243620]},
	{ place: "Gardena, Los Angeles", confirmed: 30, deaths: -1, recovered: -1, active: -1, coord:[33.888349,-118.308962]},
	{ place: "Glassell Park, Los Angeles", confirmed: 30, deaths: -1, recovered: -1, active: -1, coord:[34.109036,-118.233378]},
	{ place: "Glendale, Los Angeles", confirmed: 129, deaths: -1, recovered: -1, active: -1, coord:[34.142508,-118.255075]},
	{ place: "Glendora, Los Angeles", confirmed: 14, deaths: -1, recovered: -1, active: -1, coord:[34.136119,-117.865339]},
	{ place: "Gramercy Place, Los Angeles", confirmed: 7, deaths: -1, recovered: -1, active: -1, coord:[34.046773,-118.312674]},
	{ place: "Granada Hills, Los Angeles", confirmed: 27, deaths: -1, recovered: -1, active: -1, coord:[34.279358,-118.502153]},
	{ place: "Green Meadows, Los Angeles", confirmed: 10, deaths: -1, recovered: -1, active: -1, coord:[33.955556,-118.269377]},
	{ place: "Hacienda Heights, Los Angeles", confirmed: 17, deaths: -1, recovered: -1, active: -1, coord:[33.993068,-117.968676]},
	{ place: "Hancock Park, Los Angeles", confirmed: 38, deaths: -1, recovered: -1, active: -1, coord:[34.072333,-118.328661]},
	{ place: "Harbor City, Los Angeles", confirmed: 19, deaths: -1, recovered: -1, active: -1, coord:[33.790655,-118.296508]},
	{ place: "Harbor Gateway, Los Angeles", confirmed: 18, deaths: -1, recovered: -1, active: -1, coord:[33.840527,-118.302358]},
	{ place: "Harbor Pines, Los Angeles", confirmed: 0, deaths: -1, recovered: -1, active: -1, coord:[33.782401,-118.303819]},
	{ place: "Harvard Heights, Los Angeles", confirmed: 9, deaths: -1, recovered: -1, active: -1, coord:[34.042222,-118.304167]},
	{ place: "Harvard Park, Los Angeles", confirmed: 16, deaths: -1, recovered: -1, active: -1, coord:[33.983683,-118.304327]},
	{ place: "Hawaiian Gardens, Los Angeles", confirmed: -1, deaths: -1, recovered: -1, active: -1, coord:[33.831404,-118.072842]},
	{ place: "Hawthorne, Los Angeles", confirmed: -1, deaths: -1, recovered: -1, active: -1, coord:[33.916403,-118.352575]},
	{ place: "Hermosa Beach, Los Angeles", confirmed: 17, deaths: -1, recovered: -1, active: -1, coord:[33.862237,-118.399519]},
	{ place: "Hi Vista, Los Angeles", confirmed: 0, deaths: -1, recovered: -1, active: -1, coord:[34.734986,-117.777285]},
	{ place: "Hidden Hills, Los Angeles", confirmed: 0, deaths: -1, recovered: -1, active: -1, coord:[34.164880,-118.664754]},
	{ place: "Highland Park, Los Angeles", confirmed: 19, deaths: -1, recovered: -1, active: -1, coord:[34.115495,-118.184390]},
	{ place: "Historic Filipinotown, Los Angeles", confirmed: 8, deaths: -1, recovered: -1, active: -1, coord:[34.070269,-118.268038]},
	{ place: "Hollywood Hills, Los Angeles", confirmed: 39, deaths: -1, recovered: -1, active: -1, coord:[34.117660,-118.352039]},
	{ place: "Hollywood, Los Angeles", confirmed: 96, deaths: -1, recovered: -1, active: -1, coord:[34.092809,-118.328661]},
	{ place: "Huntington Park, Los Angeles", confirmed: 26, deaths: -1, recovered: -1, active: -1, coord:[33.981681,-118.225072]},
	{ place: "Hyde Park, Los Angeles", confirmed: 14, deaths: -1, recovered: -1, active: -1, coord:[33.980569,-118.330631]},
	{ place: "Industry, Los Angeles", confirmed: -1, deaths: -1, recovered: -1, active: -1, coord:[34.019734,-117.958675]},
	{ place: "Inglewood, Los Angeles", confirmed: 69, deaths: -1, recovered: -1, active: -1, coord:[33.961680,-118.353131]},
	{ place: "Irwindale, Los Angeles", confirmed: 0, deaths: -1, recovered: -1, active: -1, coord:[34.106953,-117.935341]},
	{ place: "Jefferson Park, Los Angeles", confirmed: -1, deaths: -1, recovered: -1, active: -1, coord:[34.027234,-118.317576]},
	{ place: "Kagel/Lopez Canyons, Los Angeles", confirmed: 0, deaths: -1, recovered: -1, active: -1, coord:[34.303791,-118.395321]},
	{ place: "Koreatown, Los Angeles", confirmed: 32, deaths: -1, recovered: -1, active: -1, coord:[34.059712,-118.300892]},
	{ place: "La Canada Flintridge, Los Angeles", confirmed: 14, deaths: -1, recovered: -1, active: -1, coord:[34.206818,-118.200028]},
	{ place: "La Crescenta-Montrose, Los Angeles", confirmed: 5, deaths: -1, recovered: -1, active: -1, coord:[34.228754,-118.235119]},
	{ place: "La Habra Heights, Los Angeles", confirmed: 0, deaths: -1, recovered: -1, active: -1, coord:[33.960846,-117.950619]},
	{ place: "La Mirada, Los Angeles", confirmed: 15, deaths: -1, recovered: -1, active: -1, coord:[33.917236,-118.012009]},
	{ place: "La Puente, Los Angeles", confirmed: 12, deaths: -1, recovered: -1, active: -1, coord:[34.020011,-117.949508]},
	{ place: "La Rambla, Los Angeles", confirmed: -1, deaths: -1, recovered: -1, active: -1, coord:[34.036900,-118.637024]},
	{ place: "La Verne, Los Angeles", confirmed: -1, deaths: -1, recovered: -1, active: -1, coord:[34.100843,-117.767836]},
	{ place: "Ladera Heights, Los Angeles", confirmed: 10, deaths: -1, recovered: -1, active: -1, coord:[33.987776,-118.370370]},
	{ place: "Lafayette Square, Los Angeles", confirmed: 5, deaths: -1, recovered: -1, active: -1, coord:[34.043056,-118.331944]},
	{ place: "Lake Balboa, Los Angeles", confirmed: 25, deaths: -1, recovered: -1, active: -1, coord:[34.201083,-118.501094]},
	{ place: "Lake Hughes, Los Angeles", confirmed: 0, deaths: -1, recovered: -1, active: -1, coord:[34.677332,-118.452547]},
	{ place: "Lake Los Angeles, Los Angeles", confirmed: -1, deaths: -1, recovered: -1, active: -1, coord:[34.612490,-117.828119]},
	{ place: "Lake Manor, Los Angeles", confirmed: -1, deaths: -1, recovered: -1, active: -1, coord:[34.238154,-118.637704]},
	{ place: "Lakeview Terrace, Los Angeles", confirmed: 10, deaths: -1, recovered: -1, active: -1, coord:[34.276391,-118.361191]},
	{ place: "Lakewood, Los Angeles", confirmed: 29, deaths: -1, recovered: -1, active: -1, coord:[33.853627,-118.133956]},
	{ place: "Lancaster, Los Angeles", confirmed: 51, deaths: -1, recovered: -1, active: -1, coord:[34.686785,-118.154163]},
	{ place: "Lawndale, Los Angeles", confirmed: 13, deaths: -1, recovered: -1, active: -1, coord:[33.887237,-118.352574]},
	{ place: "Leimert Park, Los Angeles", confirmed: 17, deaths: -1, recovered: -1, active: -1, coord:[34.010670,-118.323476]},
	{ place: "Lennox, Los Angeles", confirmed: 15, deaths: -1, recovered: -1, active: -1, coord:[33.938069,-118.352575]},
	{ place: "Leona Valley, Los Angeles", confirmed: 0, deaths: -1, recovered: -1, active: -1, coord:[34.618321,-118.288133]},
	{ place: "Lincoln Heights, Los Angeles", confirmed: 11, deaths: -1, recovered: -1, active: -1, coord:[34.073684,-118.211768]},
	{ place: "Little Armenia, Los Angeles", confirmed: 16, deaths: -1, recovered: -1, active: -1, coord:[34.098127,-118.300533]},
	{ place: "Little Bangladesh, Los Angeles", confirmed: 16, deaths: -1, recovered: -1, active: -1, coord:[34.069078,-118.296877]},
	{ place: "Little Tokyo, Los Angeles", confirmed: -1, deaths: -1, recovered: -1, active: -1, coord:[34.052339,-118.239505]},
	{ place: "Littlerock, Los Angeles", confirmed: 0, deaths: -1, recovered: -1, active: -1, coord:[34.521104,-117.983679]},
	{ place: "Littlerock/Juniper Hills, Los Angeles", confirmed: 0, deaths: -1, recovered: -1, active: -1, coord:[34.521104,-117.983679]},
	{ place: "Littlerock/Pearblossom, Los Angeles", confirmed: -1, deaths: -1, recovered: -1, active: -1, coord:[34.521104,-117.983679]},
	{ place: "Llano, Los Angeles", confirmed: 0, deaths: -1, recovered: -1, active: -1, coord:[34.505828,-117.817841]},
	{ place: "Lomita, Los Angeles", confirmed: 9, deaths: -1, recovered: -1, active: -1, coord:[33.792239,-118.315072]},
	{ place: "Long Beach, Los Angeles", confirmed: 0, deaths: -1, recovered: -1, active: -1, coord:[33.770050,-118.193740]},
	{ place: "Longwood, Los Angeles", confirmed: -1, deaths: -1, recovered: -1, active: -1, coord:[34.055125,-118.339375]},
	{ place: "Los Angeles, Los Angeles", confirmed: 2659, deaths: -1, recovered: -1, active: -1, coord:[34.052234,-118.243685]},
	{ place: "Los Feliz, Los Angeles", confirmed: 19, deaths: -1, recovered: -1, active: -1, coord:[34.106331,-118.284820]},
	{ place: "Lynwood, Los Angeles", confirmed: 37, deaths: -1, recovered: -1, active: -1, coord:[33.930293,-118.211460]},
	{ place: "Malibu, Los Angeles", confirmed: 8, deaths: -1, recovered: -1, active: -1, coord:[34.025922,-118.779757]},
	{ place: "Manchester Square, Los Angeles", confirmed: -1, deaths: -1, recovered: -1, active: -1, coord:[33.899321,-118.297679]},
	{ place: "Mandeville Canyon, Los Angeles", confirmed: -1, deaths: -1, recovered: -1, active: -1, coord:[34.096480,-118.502454]},
	{ place: "Manhattan Beach, Los Angeles", confirmed: 46, deaths: -1, recovered: -1, active: -1, coord:[33.884736,-118.410909]},
	{ place: "Mar Vista, Los Angeles", confirmed: 25, deaths: -1, recovered: -1, active: -1, coord:[34.015257,-118.433835]},
	{ place: "Marina del Rey, Los Angeles", confirmed: 5, deaths: -1, recovered: -1, active: -1, coord:[33.980289,-118.451745]},
	{ place: "Marina Peninsula, Los Angeles", confirmed: 6, deaths: -1, recovered: -1, active: -1, coord:[33.979698,-118.465657]},
	{ place: "Maywood, Los Angeles", confirmed: 15, deaths: -1, recovered: -1, active: -1, coord:[33.986681,-118.185349]},
	{ place: "Melrose, Los Angeles", confirmed: 140, deaths: -1, recovered: -1, active: -1, coord:[34.083467,-118.338540]},
	{ place: "Mid-city, Los Angeles", confirmed: 21, deaths: -1, recovered: -1, active: -1, coord:[34.041610,-118.328661]},
	{ place: "Miracle Mile, Los Angeles", confirmed: 17, deaths: -1, recovered: -1, active: -1, coord:[34.059534,-118.349117]},
	{ place: "Mission Hills, Los Angeles", confirmed: 12, deaths: -1, recovered: -1, active: -1, coord:[34.272258,-118.468878]},
	{ place: "Monrovia, Los Angeles", confirmed: -1, deaths: -1, recovered: -1, active: -1, coord:[34.144262,-118.001948]},
	{ place: "Montebello, Los Angeles", confirmed: 17, deaths: -1, recovered: -1, active: -1, coord:[34.016505,-118.113754]},
	{ place: "Monterey Park, Los Angeles", confirmed: 15, deaths: -1, recovered: -1, active: -1, coord:[34.062511,-118.122848]},
	{ place: "Mt. Washington, Los Angeles", confirmed: 8, deaths: -1, recovered: -1, active: -1, coord:[34.099176,-118.220351]},
	{ place: "Newhall, Los Angeles", confirmed: 0, deaths: -1, recovered: -1, active: -1, coord:[34.373361,-118.540040]},
	{ place: "North Hills, Los Angeles", confirmed: 22, deaths: -1, recovered: -1, active: -1, coord:[34.235822,-118.484937]},
	{ place: "North Hollywood, Los Angeles", confirmed: 91, deaths: -1, recovered: -1, active: -1, coord:[34.187044,-118.381256]},
	{ place: "North Lancaster, Los Angeles", confirmed: 0, deaths: -1, recovered: -1, active: -1, coord:[34.686785,-118.154163]},
	{ place: "North Whittier, Los Angeles", confirmed: -1, deaths: -1, recovered: -1, active: -1, coord:[34.074164,-118.418846]},
	{ place: "Northeast San Gabriel, Los Angeles", confirmed: -1, deaths: -1, recovered: -1, active: -1, coord:[34.096111,-118.105833]},
	{ place: "Northridge, Los Angeles", confirmed: 23, deaths: -1, recovered: -1, active: -1, coord:[34.238125,-118.530123]},
	{ place: "Norwalk, Los Angeles", confirmed: 49, deaths: -1, recovered: -1, active: -1, coord:[33.902237,-118.081733]},
	{ place: "Pacific Palisades, Los Angeles", confirmed: 26, deaths: -1, recovered: -1, active: -1, coord:[34.035633,-118.515590]},
	{ place: "Pacoima, Los Angeles", confirmed: 30, deaths: -1, recovered: -1, active: -1, coord:[34.276769,-118.410468]},
	{ place: "Padua Hills, Los Angeles", confirmed: 0, deaths: -1, recovered: -1, active: -1, coord:[34.150875,-117.701691]},
	{ place: "Palisades Highlands, Los Angeles", confirmed: -1, deaths: -1, recovered: -1, active: -1, coord:[34.045271,-118.551528]},
	{ place: "Palmdale, Los Angeles", confirmed: 37, deaths: -1, recovered: -1, active: -1, coord:[34.579434,-118.116461]},
	{ place: "Palms, Los Angeles", confirmed: 41, deaths: -1, recovered: -1, active: -1, coord:[34.024413,-118.407547]},
	{ place: "Palos Verdes Estates, Los Angeles", confirmed: 23, deaths: -1, recovered: -1, active: -1, coord:[33.800571,-118.390074]},
	{ place: "Palos Verdes Peninsula, Los Angeles", confirmed: 0, deaths: -1, recovered: -1, active: -1, coord:[33.768384,-118.349216]},
	{ place: "Panorama City, Los Angeles", confirmed: 33, deaths: -1, recovered: -1, active: -1, coord:[34.227617,-118.442425]},
	{ place: "Paramount, Los Angeles", confirmed: 23, deaths: -1, recovered: -1, active: -1, coord:[34.083799,-118.320833]},
	{ place: "Park La Brea, Los Angeles", confirmed: 8, deaths: -1, recovered: -1, active: -1, coord:[34.070047,-118.355219]},
	{ place: "Pearblossom/Llano, Los Angeles", confirmed: 0, deaths: -1, recovered: -1, active: -1, coord:[34.506403,-117.879102]},
	{ place: "Pellissier Village, Los Angeles", confirmed: 0, deaths: -1, recovered: -1, active: -1, coord:[34.033892,-118.032082]},
	{ place: "Pico Rivera, Los Angeles", confirmed: 31, deaths: -1, recovered: -1, active: -1, coord:[33.983069,-118.096735]},
	{ place: "Pico-Union, Los Angeles", confirmed: 21, deaths: -1, recovered: -1, active: -1, coord:[34.044253,-118.289235]},
	{ place: "Placerita Canyon, Los Angeles", confirmed: 0, deaths: -1, recovered: -1, active: -1, coord:[34.377961,-118.467527]},
	{ place: "Playa Del Rey, Los Angeles", confirmed: -1, deaths: -1, recovered: -1, active: -1, coord:[33.956419,-118.442232]},
	{ place: "Playa Vista, Los Angeles", confirmed: 8, deaths: -1, recovered: -1, active: -1, coord:[33.975395,-118.419231]},
	{ place: "Pomona, Los Angeles", confirmed: 24, deaths: -1, recovered: -1, active: -1, coord:[34.055103,-117.749991]},
	{ place: "Porter Ranch, Los Angeles", confirmed: 21, deaths: -1, recovered: -1, active: -1, coord:[34.282213,-118.550616]},
	{ place: "Quartz Hill, Los Angeles", confirmed: -1, deaths: -1, recovered: -1, active: -1, coord:[34.645265,-118.218131]},
	{ place: "Rancho Dominguez, Los Angeles", confirmed: -1, deaths: -1, recovered: -1, active: -1, coord:[33.850810,-118.224885]},
	{ place: "Rancho Palos Verdes, Los Angeles", confirmed: 28, deaths: -1, recovered: -1, active: -1, coord:[33.744461,-118.387017]},
	{ place: "Rancho Park, Los Angeles", confirmed: 7, deaths: -1, recovered: -1, active: -1, coord:[34.045430,-118.420692]},
	{ place: "Redondo Beach, Los Angeles", confirmed: 64, deaths: -1, recovered: -1, active: -1, coord:[33.849182,-118.388408]},
	{ place: "Regent Square, Los Angeles", confirmed: -1, deaths: -1, recovered: -1, active: -1, coord:[33.964340,-118.361781]},
	{ place: "Reseda Ranch, Los Angeles", confirmed: -1, deaths: -1, recovered: -1, active: -1, coord:[34.215997,-118.535589]},
	{ place: "Reseda, Los Angeles", confirmed: 38, deaths: -1, recovered: -1, active: -1, coord:[34.201114,-118.536052]},
	{ place: "Reynier Village, Los Angeles", confirmed: -1, deaths: -1, recovered: -1, active: -1, coord:[34.036765,-118.385561]},
	{ place: "Rolling Hills Estates, Los Angeles", confirmed: 8, deaths: -1, recovered: -1, active: -1, coord:[33.787794,-118.358128]},
	{ place: "Rolling Hills, Los Angeles", confirmed: -1, deaths: -1, recovered: -1, active: -1, coord:[33.756962,-118.353961]},
	{ place: "Roosevelt, Los Angeles", confirmed: 0, deaths: -1, recovered: -1, active: -1, coord:[34.100981,-118.341667]},
	{ place: "Rosemead, Los Angeles", confirmed: 8, deaths: -1, recovered: -1, active: -1, coord:[34.080565,-118.072846]},
	{ place: "Rosewood, Los Angeles", confirmed: -1, deaths: -1, recovered: -1, active: -1, coord:[34.005698,-118.430417]},
	{ place: "Rosewood/East Gardena, Los Angeles", confirmed: 0, deaths: -1, recovered: -1, active: -1, coord:[33.888349,-118.308962]},
	{ place: "Rosewood/West Rancho Dominguez, Los Angeles", confirmed: 0, deaths: -1, recovered: -1, active: -1, coord:[33.893905,-118.270628]},
	{ place: "Rowland Heights, Los Angeles", confirmed: 8, deaths: -1, recovered: -1, active: -1, coord:[33.976124,-117.905339]},
	{ place: "San Dimas, Los Angeles", confirmed: 9, deaths: -1, recovered: -1, active: -1, coord:[34.106676,-117.806726]},
	{ place: "San Fernando, Los Angeles", confirmed: 9, deaths: -1, recovered: -1, active: -1, coord:[34.281946,-118.438972]},
	{ place: "San Gabriel, Los Angeles", confirmed: 10, deaths: -1, recovered: -1, active: -1, coord:[34.096111,-118.105833]},
	{ place: "San Jose Hills, Los Angeles", confirmed: 0, deaths: -1, recovered: -1, active: -1, coord:[34.059177,-117.842560]},
	{ place: "San Marino, Los Angeles", confirmed: 5, deaths: -1, recovered: -1, active: -1, coord:[34.121397,-118.106459]},
	{ place: "San Pasqual, Los Angeles", confirmed: 0, deaths: -1, recovered: -1, active: -1, coord:[34.137845,-118.098770]},
	{ place: "San Pedro, Los Angeles", confirmed: 26, deaths: -1, recovered: -1, active: -1, coord:[33.736062,-118.292246]},
	{ place: "Sand Canyon, Los Angeles", confirmed: 0, deaths: -1, recovered: -1, active: -1, coord:[34.439300,-118.417614]},
	{ place: "Santa Catalina Island, Los Angeles", confirmed: -1, deaths: -1, recovered: -1, active: -1, coord:[33.387886,-118.416310]},
	{ place: "Santa Clarita, Los Angeles", confirmed: 102, deaths: -1, recovered: -1, active: -1, coord:[34.391664,-118.542586]},
	{ place: "Santa Fe Springs, Los Angeles", confirmed: -1, deaths: -1, recovered: -1, active: -1, coord:[33.947236,-118.085345]},
	{ place: "Santa Monica Mountains, Los Angeles", confirmed: 5, deaths: -1, recovered: -1, active: -1, coord:[34.120300,-118.931800]},
	{ place: "Santa Monica, Los Angeles", confirmed: 68, deaths: -1, recovered: -1, active: -1, coord:[34.019454,-118.491191]},
	{ place: "Saugus, Los Angeles", confirmed: -1, deaths: -1, recovered: -1, active: -1, coord:[34.413524,-118.540401]},
	{ place: "Saugus/Canyon Country, Los Angeles", confirmed: 0, deaths: -1, recovered: -1, active: -1, coord:[34.391664,-118.542586]},
	{ place: "Shadow Hills, Los Angeles", confirmed: 5, deaths: -1, recovered: -1, active: -1, coord:[34.257526,-118.354961]},
	{ place: "Sherman Oaks, Los Angeles", confirmed: 56, deaths: -1, recovered: -1, active: -1, coord:[34.148972,-118.451357]},
	{ place: "Sierra Madre, Los Angeles", confirmed: -1, deaths: -1, recovered: -1, active: -1, coord:[34.161673,-118.052846]},
	{ place: "Signal Hill, Los Angeles", confirmed: -1, deaths: -1, recovered: -1, active: -1, coord:[33.804461,-118.167846]},
	{ place: "Silverlake, Los Angeles", confirmed: 55, deaths: -1, recovered: -1, active: -1, coord:[34.086941,-118.270204]},
	{ place: "South Antelope Valley, Los Angeles", confirmed: 0, deaths: -1, recovered: -1, active: -1, coord:[34.751371,-118.252298]},
	{ place: "South Carthay, Los Angeles", confirmed: 20, deaths: -1, recovered: -1, active: -1, coord:[34.056121,-118.373411]},
	{ place: "South El Monte, Los Angeles", confirmed: -1, deaths: -1, recovered: -1, active: -1, coord:[34.051955,-118.046734]},
	{ place: "South Gate, Los Angeles", confirmed: 52, deaths: -1, recovered: -1, active: -1, coord:[33.954737,-118.212016]},
	{ place: "South Park, Los Angeles", confirmed: 22, deaths: -1, recovered: -1, active: -1, coord:[34.042962,-118.264134]},
	{ place: "South Pasadena, Los Angeles", confirmed: 10, deaths: -1, recovered: -1, active: -1, coord:[34.116120,-118.150349]},
	{ place: "South San Gabriel, Los Angeles", confirmed: 5, deaths: -1, recovered: -1, active: -1, coord:[34.049213,-118.094920]},
	{ place: "South Whittier, Los Angeles", confirmed: 15, deaths: -1, recovered: -1, active: -1, coord:[33.951028,-118.040285]},
	{ place: "Southeast Antelope Valley, Los Angeles", confirmed: 0, deaths: -1, recovered: -1, active: -1, coord:[34.751371,-118.252298]},
	{ place: "St Elmo Village, Los Angeles", confirmed: -1, deaths: -1, recovered: -1, active: -1, coord:[34.043142,-118.343027]},
	{ place: "Stevenson Ranch, Los Angeles", confirmed: 7, deaths: -1, recovered: -1, active: -1, coord:[34.393110,-118.590754]},
	{ place: "Studio City, Los Angeles", confirmed: 21, deaths: -1, recovered: -1, active: -1, coord:[34.139560,-118.387099]},
	{ place: "Sun Valley, Los Angeles", confirmed: 18, deaths: -1, recovered: -1, active: -1, coord:[34.227930,-118.381256]},
	{ place: "Sun Village, Los Angeles", confirmed: -1, deaths: -1, recovered: -1, active: -1, coord:[34.557911,-117.958185]},
	{ place: "Sunland, Los Angeles", confirmed: 13, deaths: -1, recovered: -1, active: -1, coord:[34.259647,-118.308275]},
	{ place: "Sunrise Village, Los Angeles", confirmed: 0, deaths: -1, recovered: -1, active: -1, coord:[32.696651,-96.772057]},
	{ place: "Sycamore Square, Los Angeles", confirmed: 0, deaths: -1, recovered: -1, active: -1, coord:[34.090713,-118.342813]},
	{ place: "Sylmar, Los Angeles", confirmed: 61, deaths: -1, recovered: -1, active: -1, coord:[34.305828,-118.457197]},
	{ place: "Tarzana, Los Angeles", confirmed: 37, deaths: -1, recovered: -1, active: -1, coord:[34.149485,-118.550616]},
	{ place: "Temple City, Los Angeles", confirmed: 9, deaths: -1, recovered: -1, active: -1, coord:[34.107231,-118.057846]},
	{ place: "Temple-Beaudry, Los Angeles", confirmed: 24, deaths: -1, recovered: -1, active: -1, coord:[34.062889,-118.251274]},
	{ place: "Thai Town, Los Angeles", confirmed: 5, deaths: -1, recovered: -1, active: -1, coord:[34.101810,-118.303572]},
	{ place: "Toluca Lake, Los Angeles", confirmed: 6, deaths: -1, recovered: -1, active: -1, coord:[34.150179,-118.354961]},
	{ place: "Toluca Terrace, Los Angeles", confirmed: 0, deaths: -1, recovered: -1, active: -1, coord:[34.166798,-118.358905]},
	{ place: "Toluca Woods, Los Angeles", confirmed: 0, deaths: -1, recovered: -1, active: -1, coord:[34.160588,-118.359344]},
	{ place: "Torrance, Los Angeles", confirmed: 86, deaths: -1, recovered: -1, active: -1, coord:[33.835849,-118.340629]},
	{ place: "Tujunga, Los Angeles", confirmed: 10, deaths: -1, recovered: -1, active: -1, coord:[34.259647,-118.308275]},
	{ place: "Twin Lakes/Oat Mountain, Los Angeles", confirmed: -1, deaths: -1, recovered: -1, active: -1, coord:[34.278058,-118.601477]},
	{ place: "University Hills, Los Angeles", confirmed: 0, deaths: -1, recovered: -1, active: -1, coord:[34.066687,-118.168238]},
	{ place: "University Park, Los Angeles", confirmed: 16, deaths: -1, recovered: -1, active: -1, coord:[34.030970,-118.278974]},
	{ place: "Val Verde, Los Angeles", confirmed: 0, deaths: -1, recovered: -1, active: -1, coord:[34.444995,-118.657589]},
	{ place: "Valencia, Los Angeles", confirmed: -1, deaths: -1, recovered: -1, active: -1, coord:[34.456151,-118.571382]},
	{ place: "Valinda, Los Angeles", confirmed: 6, deaths: -1, recovered: -1, active: -1, coord:[34.045292,-117.943098]},
	{ place: "Valley Glen, Los Angeles", confirmed: 21, deaths: -1, recovered: -1, active: -1, coord:[34.186682,-118.413815]},
	{ place: "Valley Village, Los Angeles", confirmed: 30, deaths: -1, recovered: -1, active: -1, coord:[34.163305,-118.384178]},
	{ place: "Van Nuys, Los Angeles", confirmed: 36, deaths: -1, recovered: -1, active: -1, coord:[34.189857,-118.451357]},
	{ place: "Venice, Los Angeles", confirmed: 25, deaths: -1, recovered: -1, active: -1, coord:[33.985047,-118.469483]},
	{ place: "Vermont Knolls, Los Angeles", confirmed: 12, deaths: -1, recovered: -1, active: -1, coord:[33.927334,-118.289282]},
	{ place: "Vermont Square, Los Angeles", confirmed: 6, deaths: -1, recovered: -1, active: -1, coord:[34.003704,-118.300204]},
	{ place: "Vermont Vista, Los Angeles", confirmed: 14, deaths: -1, recovered: -1, active: -1, coord:[33.945493,-118.282667]},
	{ place: "Vernon Central, Los Angeles", confirmed: 21, deaths: -1, recovered: -1, active: -1, coord:[34.003903,-118.230073]},
	{ place: "Vernon, Los Angeles", confirmed: 0, deaths: -1, recovered: -1, active: -1, coord:[34.003903,-118.230073]},
	{ place: "Victoria Park, Los Angeles", confirmed: 11, deaths: -1, recovered: -1, active: -1, coord:[34.047022,-118.331918]},
	{ place: "View Heights, Los Angeles", confirmed: -1, deaths: -1, recovered: -1, active: -1, coord:[33.984354,-118.347656]},
	{ place: "View Park/Windsor Hills, Los Angeles", confirmed: 12, deaths: -1, recovered: -1, active: -1, coord:[33.994269,-118.344711]},
	{ place: "Walnut Park, Los Angeles", confirmed: 7, deaths: -1, recovered: -1, active: -1, coord:[33.968887,-118.222428]},
	{ place: "Walnut, Los Angeles", confirmed: 8, deaths: -1, recovered: -1, active: -1, coord:[34.020289,-117.865339]},
	{ place: "Watts, Los Angeles", confirmed: 15, deaths: -1, recovered: -1, active: -1, coord:[33.938636,-118.238043]},
	{ place: "Wellington Square, Los Angeles", confirmed: 0, deaths: -1, recovered: -1, active: -1, coord:[34.039174,-118.334287]},
	{ place: "West Adams, Los Angeles", confirmed: 21, deaths: -1, recovered: -1, active: -1, coord:[34.032498,-118.362691]},
	{ place: "West Antelope Valley, Los Angeles", confirmed: -1, deaths: -1, recovered: -1, active: -1, coord:[34.751371,-118.252298]},
	{ place: "West Carson, Los Angeles", confirmed: 20, deaths: -1, recovered: -1, active: -1, coord:[33.821684,-118.292572]},
	{ place: "West Covina, Los Angeles", confirmed: 12, deaths: -1, recovered: -1, active: -1, coord:[34.068621,-117.938953]},
	{ place: "West Hills, Los Angeles", confirmed: 18, deaths: -1, recovered: -1, active: -1, coord:[34.197312,-118.643981]},
	{ place: "West Hollywood, Los Angeles", confirmed: 83, deaths: -1, recovered: -1, active: -1, coord:[34.090009,-118.361744]},
	{ place: "West LA, Los Angeles", confirmed: -1, deaths: -1, recovered: -1, active: -1, coord:[34.041209,-118.442596]},
	{ place: "West Los Angeles, Los Angeles", confirmed: 29, deaths: -1, recovered: -1, active: -1, coord:[34.041209,-118.442596]},
	{ place: "West Puente Valley, Los Angeles", confirmed: -1, deaths: -1, recovered: -1, active: -1, coord:[34.056112,-117.968498]},
	{ place: "West Rancho Dominguez, Los Angeles", confirmed: -1, deaths: -1, recovered: -1, active: -1, coord:[33.893905,-118.270628]},
	{ place: "West Vernon, Los Angeles", confirmed: 27, deaths: -1, recovered: -1, active: -1, coord:[34.005329,-118.280176]},
	{ place: "West Whittier/Los Nietos, Los Angeles", confirmed: 8, deaths: -1, recovered: -1, active: -1, coord:[33.980055,-118.067915]},
	{ place: "Westchester, Los Angeles", confirmed: 24, deaths: -1, recovered: -1, active: -1, coord:[33.962590,-118.398784]},
	{ place: "Westfield/Academy Hills, Los Angeles", confirmed: 0, deaths: -1, recovered: -1, active: -1, coord:[34.052234,-118.243685]},
	{ place: "Westhills, Los Angeles", confirmed: 0, deaths: -1, recovered: -1, active: -1, coord:[34.197312,-118.643981]},
	{ place: "Westlake Village, Los Angeles", confirmed: -1, deaths: -1, recovered: -1, active: -1, coord:[34.146647,-118.807373]},
	{ place: "Westlake, Los Angeles", confirmed: 31, deaths: -1, recovered: -1, active: -1, coord:[34.058043,-118.273127]},
	{ place: "Westwood, Los Angeles", confirmed: 27, deaths: -1, recovered: -1, active: -1, coord:[34.063502,-118.445516]},
	{ place: "White Fence Farms, Los Angeles", confirmed: 0, deaths: -1, recovered: -1, active: -1, coord:[41.675859,-88.057258]},
	{ place: "Whittier, Los Angeles", confirmed: -1, deaths: -1, recovered: -1, active: -1, coord:[33.979179,-118.032844]},
	{ place: "Wholesale District, Los Angeles", confirmed: 12, deaths: -1, recovered: -1, active: -1, coord:[34.041895,-118.232645]},
	{ place: "Willowbrook, Los Angeles", confirmed: 12, deaths: -1, recovered: -1, active: -1, coord:[33.916960,-118.255073]},
	{ place: "Wilmington, Los Angeles", confirmed: 19, deaths: -1, recovered: -1, active: -1, coord:[33.785795,-118.264357]},
	{ place: "Wilshire Center, Los Angeles", confirmed: 23, deaths: -1, recovered: -1, active: -1, coord:[34.065381,-118.300369]},
	{ place: "Winnetka, Los Angeles", confirmed: 29, deaths: -1, recovered: -1, active: -1, coord:[34.204859,-118.573962]},
	{ place: "Wiseburn, Los Angeles", confirmed: -1, deaths: -1, recovered: -1, active: -1, coord:[33.917909,-118.384081]},
	{ place: "Woodland Hills, Los Angeles", confirmed: 47, deaths: -1, recovered: -1, active: -1, coord:[34.165357,-118.608975]}
];
