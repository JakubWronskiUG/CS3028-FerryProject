from scraper import TimeTableScraper, FerryCompany


scr = TimeTableScraper()

pentland_ferries_timetables = scr.get_timetables_from_website(
    FerryCompany.PENTLANDFERRIES)

print(pentland_ferries_timetables)
