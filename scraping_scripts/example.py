from scraper import TimeTableScraper, FerryCompany


scr = TimeTableScraper()

pentland_ferries_timetables = scr.get_timetables_from_website(
    FerryCompany.PENTLANDFERRIES)

# final = scr.scrape_html_tables("https://pentlandferries.co.uk/timetable-2/")


for timetable in pentland_ferries_timetables:
    print(timetable, '\n')
