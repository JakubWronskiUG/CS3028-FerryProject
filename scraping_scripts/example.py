from scraper import TimeTableScraper, FerryCompany


scr = TimeTableScraper()

pentland_ferries_timetables = scr.get_timetables_from_website(
    FerryCompany.PENTLANDFERRIES)

for timetable in pentland_ferries_timetables:
    print(timetable, '\n')
